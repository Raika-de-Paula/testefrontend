// arquivo contexts/auth.jsx
import { createContext, useEffect, useState, useCallback } from "react";

export const AuthContext = createContext({});

const API_BASE_URL = 'https://testebackend-ruddy.vercel.app'; 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [token, setToken] = useState(null); 

    const signout = () => {
        localStorage.removeItem("user_token");
        setUser(null);
        setToken(null);
    };


    //  Função para buscar os dados do usuário autenticado no backend
    const fetchUserData = useCallback(async (authToken) => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/me`, { 
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData); 
            } else {
                if(response.status === 401 || response.status === 403){
                signout();
                }
            }
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    }, [signout, setUser]);


    useEffect(() => {
        const userToken = localStorage.getItem("user_token");

        if (userToken) {
            const tokenData = JSON.parse(userToken);
            setToken(tokenData.token);
            fetchUserData(tokenData.token);
        }
    }, [fetchUserData]); 

    // =========================================================
    // FUNÇÃO SIGNIN (LOGIN)
    // =========================================================
    const signin = async (email, password) => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("user_token", JSON.stringify({ email: data.user.email, token: data.token })); 
                setToken(data.token);
                setUser(data.user);
                return null; 
            } else {
                return data.message || "Credenciais inválidas.";
            }
        } catch (error) {
            return "Erro de conexão com o servidor.";
        }
    };

    // =========================================================
    // FUNÇÃO SIGNUP (CADASTRO)
    // =========================================================
    const signup = async (nome, email, password, cpf, dataNascimento, telefone) => {
        const cpfLimpo = cpf ? cpf.replace(/\D/g, '') : '';
        
        if (cpfLimpo.length !== 11) {
            return "O CPF deve conter exatamente 11 dígitos.";
        }

        try {
            const response = await fetch(`${API_BASE_URL}/users/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    nome, 
                    email, 
                    password, 
                    cpf: cpfLimpo, 
                    dataNascimento, 
                    telefone 
                }),
            });

            const data = await response.json();

            if (response.ok) {
                return null; 
            } else {
                return data.message || "Erro no cadastro.";
            }
        } catch (error) {
            return "Erro de conexão com o servidor.";
        }
    };
    //================================================
    //FUNÇÃO: UNENROLLCOURSE (TRANCAR CURSO/REMOVER)
    //================================================
    const unenrollCourse = async (courseId) => {
        if (!token) return "Usuário não autenticado.";

        try{
            const response = await fetch(`${API_BASE_URL}/users/unenroll`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ courseId }),
            });
            const data = await response.json();

            if(response.ok) {
                setUser(data.user);
                return null;
            } else {
                return data.message || "Erro ao trancar o curso.";
            }
        } catch (error) {
            return "Erro de conexão com o servidor.";
        }
    };
    
    // ============================================
    // FUNÇÃO: updateUser (ATUALIZAÇÃO DE PERFIL)
    // ============================================
    const updateUser = async (dataToUpdate) => {
        if (!token || !user || !user._id) return "Usuário não autenticado ou ID ausente.";

        try {
            const response = await fetch(`${API_BASE_URL}/users/${user._id}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
                body: JSON.stringify(dataToUpdate),
            });

            const data = await response.json();

            if (response.ok) {
                const updatedUser = data.user || data;
                
                setUser(updatedUser);
                return null;
            } else {
                return data.message || "Erro ao atualizar o perfil.";
            }
        } catch (error) {
            console.error("Erro na atualização do perfil:", error);
            return "Erro de conexão ao tentar atualizar o perfil.";
        }
    };
    
    // =========================================================
    // FUNÇÃO ENROLLCOURSE (MATRÍCULA)
    // =========================================================
    const enrollCourse = async (course, teacher) => {
        if (!token) return "Usuário não autenticado.";
    
        try {
            const response = await fetch(`${API_BASE_URL}/users/enroll`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
                body: JSON.stringify({ 
                    courseId: course.id,
                    title: course.title,
                    duration: course.duration,
                    teacherName: teacher?.name || "indisponivel",
                    day: course.day,
                    time: course.time,
                    teacherEmail: teacher?.email || "contato@escola.com"
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Atualiza o estado global com o objeto retornado pelo backend (data.user)
                setUser(data.user);
                return null;
            } else {
                return data.message || "Erro ao matricular no curso.";
            }
        } catch (error) {
            console.error("Erro na requisição de matrícula:", error);
            return "Erro de conexão com o servidor.";
        }
    };
    // =========================================================
    // FUNÇÃO SIGNOUT (SAIR)
    // =========================================================

    return (
        <AuthContext.Provider
            value={{ 
                user, 
                signed: !!user, 
                signin, 
                signup, 
                signout,
                enrollCourse,
                updateUser,
                unenrollCourse,
                token 
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};