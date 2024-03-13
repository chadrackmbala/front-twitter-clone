import { useState } from "react";
import { useForm } from 'react-hook-form';
import useUserStore from "../context/UserContext";

export default function Login({ onLoginSubmit }) {

    const { pseudo, userProfil, isLogged, upDatePseudo, upDateIsLogged } = useUserStore();

    // const [pseudoInput, setPseudoInput] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Succès");
        console.log("Pseudo :", data.email, "Password :", data.password);
        upDatePseudo(data.pseudo)
        upDateIsLogged();
        reset();
    }

    return (
        <>
            <div className="flex justify-center w-full h-screen items-center">
                <div>
                    <h2 className="text-red-600 text-center mb-10 text-2xl">Connectez-vous</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-10">
                            <div className="mb-10">
                                <div className="flex gap-10">
                                    <label >Pseudo : </label>
                                    <div>
                                        <input className="text-black" type="text"
                                            name='pseudo'
                                            {...register("pseudo", {
                                                required: "Ce champ est oblogatoire !"
                                            })}
                                        /><br />
                                        {errors.pseudo && (
                                            <span style={{ color: "red" }}>{errors.pseudo.message}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-7">
                                    <label>Password : </label>
                                    <div>
                                        <input className="text-black" type="password"
                                            name='password'
                                            {...register("password", {
                                                required: "Ce champ est oblogatoire !",
                                            })}
                                        /><br />
                                        {errors.password && (
                                            <span style={{ color: "red" }}>{errors.password.message}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#1D9BF0] w-48 rounded h-10 hover:bg-sky-700" >
                                ACCEDER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};