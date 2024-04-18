import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <p className="text-center text-lg text-gray-700 mb-4">Attendez que l'admin valide votre inscription. Un email sera envoyé à votre adresse email.</p>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
