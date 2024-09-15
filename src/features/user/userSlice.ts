import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

enum UserRole {
    Estudiante = "estudiante",
    Profesor = "profesor",
    Administrador = "administrador",
    Empresa = "empresa",
}

const initialState = {
    user: null,
    isAuthenticated: false,
    role: UserRole.Estudiante, // Asigna un valor predeterminado
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(
            state,
            action: PayloadAction<{ user: any; role: UserRole }>
        ) {
            // Establecer el usuario y el estado de autenticación
            state.user = action.payload.user;
            state.isAuthenticated = true;
            // Establecer el rol del usuario
            state.role = action.payload.role;
        },
        clearUser(state) {
            // Limpiar el usuario, el estado de autenticación y el rol
            state.user = null;
            state.isAuthenticated = false;
            state.role = UserRole.Estudiante;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;