"use client"; //para que lo lea el navegador, todo se ejecuta en el navegador
import Link from "next/link";
import { useState } from "react";

type AuthFormProps = { mode: "login" | "signup" };
export default function AuthForm({ mode }: AuthFormProps) {
  const esRegistro = mode === "signup"; //3 veces igual, comparar tipo de dato y el valor de dato
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const labelClass =
    "block font-label-ui text-label-ui text-on-surface-variant font-medium";
  const inputClass =
    "w-full rounded-lg border-outline-variant/30 bg-background px-4 py-3 text-sm text-on-surface-outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <form className="space-y-4">
      {esRegistro && (
        <div className="space-y-1.5">
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
              person
            </span>
            <input
              id="nombre"
              type="text"
              autoComplete="name"
              required
              placeholder="Tu nombre completo"
              className={inputClass}
            />
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Correo electrónico
        </label>
        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-outline pointer-events-none">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <input
            id="email"
            type="email"
            placeholder="ejemplo@correo.com"
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="font-label-ui text-label-ui text-primary transition-colors underline-offset-2 hover:text-primary-fixed hover:underline"
          >
            Contraseña
          </label>
          <Link href="#" className="text-xs text-primary hover:underline">
            Recuperar contraseña
          </Link>
        </div>

        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-outline pointer-events-none">
            <span className="material-symbols-outlined">lock</span>
          </div>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="*****"
            autoComplete="current-password"
            required
            className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-lowest py-2.5 pl-10 pr-10 text-on-surface placeholder-outline focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-outline transition-colors hover:text-on-surface-variant focus:outline-none"
            type="button"
            onClick={() => setShowPassword((currentValue) => !currentValue)}
          >
            <span className="material-symbols-outlined">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>

      {esRegistro && (
        <div className="space-y-1.5">
          <label
            htmlFor="confirmPassword"
            className="block font-label-ui text-label-ui text-on-surface-variant font-medium"
          >
            Confirmar contraseña
          </label>
          <div className="relative rounded-lg">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-outline pointer-events-none">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••••••"
              autoComplete="new-password"
              required
              className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-lowest py-2.5 pl-10 pr-10 text-on-surface placeholder-outline focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-outline transition-colors hover:text-on-surface-variant focus:outline-none"
              type="button"
              onClick={() => setShowConfirmPassword((currentValue) => !currentValue)}
            >
              <span className="material-symbols-outlined">
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>
      )}
      {!esRegistro && (
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              className="w-4 h-4 rounded bg-surface-container-lowest border border-outline-variant/80 text-primary-container focus:ring-0 focus:ring-offset-0 checked:bg-primary-container checked:border-primary-container cursor-pointer transition-colors"
              id="remember"
              name="remember"
              type="checkbox"
            />
            <span className="font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface transition-colors">
              Mantener sesión activa
            </span>
          </label>
          <span className="font-label-code text-label-code text-outline hidden sm:inline-block"></span>
        </div>
      )}
      <div className="pt-2">
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-primary-container opacity-70 cursor-not-allowed text-on-primary font-label-ui text-label-ui font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] border border-white/10"
        disabled
        title="La autenticación se integrará después"
        
     >
        <span>{esRegistro ? "Crear Cuenta" : "Acceder a DevAtlas"}</span>
        <span className="material-symbols-outlined text-xl">
          {esRegistro ? "person_add" : "arrow_forward"}
        </span>
      </button>
      </div>
    </form>
  );
}
