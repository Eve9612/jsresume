import { useState } from "react";

interface SignupFormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {

    const [formData, setFormData] = useState<SignupFormData>({
      email: '',
      password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send formData to your backend for user registration
        console.log('Signup data submitted:', formData);
        // Clear form or redirect
        setFormData({ email: '', password: '' });
      };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/> 
            <br/>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
            <br/>
            <input type="submit"/>
        </form>
        </div>
    );
        
        
       
   
}

export default Login;