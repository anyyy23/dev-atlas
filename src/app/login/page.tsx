"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container relative">
      <div className="pointer-events-none fixed inset-0 overflow-hidden flex justify-center z-0">
        <div className="w-720px h-360px bg-primary/5 blur-120px rounded-full -top-32 absolute"></div>
        <div className="w-500px h-280px bg-secondary/5 blur-100px top-40 right-1/4 absolute"></div>
      </div>
      <header className="w-full bg-surface-dim/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-50">
        <div className="w-full max-w-1440px mx-auto px-margin flex items-center justify-between h-16">
          <Link
            className="flex items-center gap-space-sm group focus:outline-none"
            href="/"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:border-primary transition-colors duration-150">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <span className="font-headline-sm text-headline-sm font-semibold text-on-surface tracking-tight group-hover:text-primary transition-colors duration-150">
              DevAtlas
            </span>
          </Link>
          <Link
            className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors duration-150 font-label-ui text-label-ui px-3 py-1.5 rounded-lg hover:bg-surface-container-high/50"
            href="/"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span>Volver al explorador</span>
          </Link>
        </div>
      </header>
      <main
        className="flex-1 flex items-center justify-center px-margin-mobile md:px-margin py-space-xl relative z-10"
        style={{
          backgroundSize: "32px 32px",
          backgroundImage:
            "linear-gradient(to right, rgba(70, 69, 84, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(70, 69, 84, 0.08) 1px, transparent 1px)",
        }}
      >
        <div className="w-full max-w-480px">
          <div className="bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/40 rounded-xl shadow-2xl relative overflow-hidden transition-all duration-150">
            <div className="absolute top-0 inset-x-0 h-1px bg-linear-to-r from-transparent via-primary/40 to-transparent"></div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-surface-container border border-outline-variant text-secondary font-label-code text-label-code mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                  <span>Acceso a Desarrolladores</span>
                </div>
                <h1 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight mb-2">
                  Iniciar Sesión
                </h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-380px leading-relaxed">
                  Ingresa tus credenciales para sincronizar tus comparaciones y
                  hojas de ruta tecnológicas.
                </p>
              </div>

              <div className="relative my-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant/30"></div>
                </div>
                <div className="relative bg-surface-container-low px-3">
                  <span className="font-label-code text-label-code text-outline uppercase tracking-wider">
                    ingresa con correo
                  </span>
                </div>
              </div>
              <form className="space-y-4">
                <div className="space-y-1.5">
                  <label
                    className="block font-label-ui text-label-ui text-on-surface-variant font-medium"
                    htmlFor="email"
                  >
                    Correo Electrónico
                  </label>
                  <div className="relative rounded-lg">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <input
                      className="w-full pl-10 pr-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      id="email"
                      name="email"
                      placeholder="alex.dev@empresa.io"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      className="block font-label-ui text-label-ui text-on-surface-variant font-medium"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <Link
                      className="font-label-ui text-label-ui text-primary hover:text-primary-fixed transition-colors underline-offset-2 hover:underline"
                      href="#"
                    >
                      Recuperar contraseña
                    </Link>
                  </div>
                  <div className="relative rounded-lg">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined">lock</span>
                    </div>
                    <input
                      className="w-full pl-10 pr-10 py-2.5 bg-surface-container-lowest border border-outline-variant/50 
                      rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none 
                      focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      id="password"
                      name="password"
                      placeholder="••••••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface-variant focus:outline-none transition-colors"
                      type="button"
                      onClick={() =>
                        setShowPassword((currentValue) => !currentValue)
                      }
                    >
                      <span className="material-symbols-outlined">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>
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
                <div className="pt-2">
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-primary-container opacity-70 cursor-not-allowed text-on-primary font-label-ui text-label-ui font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] border border-white/10"
                    type="submit"
                    disabled
                    title="La autenticación se integrará después"
                  >
                    <span>Acceder a DevAtlas</span>
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
              <div className="mt-6 pt-5 border-t border-outline-variant/20 text-center">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  ¿No tienes una cuenta aún?
                  <Link
                    className="font-semibold text-primary hover:text-primary-fixed underline-offset-4 hover:underline transition-colors ml-1"
                    href="/registro"
                  >
                    Registrarse
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest/80 border-t border-outline-variant/30 px-6 py-3 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-tertiary">
                shield
              </span>
              <span className="font-label-code text-label-code text-outline tracking-tight text-center">
                Autenticación en desarrollo · Próximamente disponible
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between px-2 font-label-code text-label-code text-outline/80">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>ENTORNO: DESARROLLO</span>
            </div>
            <div>
              <span>DEVATLAS · FRONTEND</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 py-6">
        <div className="w-full max-w-1440px mx-auto px-margin flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 DevAtlas. Todos los derechos reservados. reservados.
          </p>
          <div className="flex items-center gap-4 font-label-code text-label-code text-on-surface-variant">
            <Link
              className="hover:text-primary transition-colors duration-150"
              href="#"
            >
              Documentación
            </Link>
            <span className="text-outline-variant/60">•</span>
            <Link
              className="hover:text-primary transition-colors duration-150"
              href="#"
            >
              Términos y Privacidad
            </Link>
            <span className="text-outline-variant/60">•</span>
            <Link
              className="hover:text-primary transition-colors duration-150"
              href="#"
            >
              Estado de API
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
