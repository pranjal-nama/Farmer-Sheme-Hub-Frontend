import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import { useParams } from 'react-router-dom';

const SchemeComponent = () => {
    const { id } = useParams();
    const [scheme, setScheme] = useState(null);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    }

    useEffect(() => {
        const fetchSchemeDetails = async () => {
            const response = await fetch(`http://localhost:8080/api/schemes/${id}`);
            const data = await response.json();
            setScheme(data);
        };
        fetchSchemeDetails();
    }, [id]);

    if (!localStorage.getItem('isLoggedIn'))
        navigate('/login')
    else
        return (
            <div>
                <nav className='px-8'>
                    <div className="nav-heading align-self-center text-xl font-medium">
                        <h1>Farmer Scheme Hub</h1>
                    </div>
                    <div className="right align-self-center">
                        <ul>
                            <li>
                                <button
                                    className="bg-black hover:bg-gray-800 text-white rounded-full px-4 py-2 text-md"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                {scheme ? (
                    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h2 className="text-2xl font-bold mb-4">{scheme.title}</h2>
                            <p className="text-gray-700 mb-2">
                                <span className="font-semibold">Description:</span>{' '}
                                {scheme.description}
                            </p>
                            <p className="text-gray-700 mb-2">
                                <span className="font-semibold">Eligibility Criteria:</span>{' '}
                                {scheme.eligibilityCriteria}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p>Loading scheme details...</p>
                )}
                <div className="footer fixed bottom-0 left-0 w-full flex justify-center items-center">
                    <h4 className='p-3'>©2023 All rights reserved</h4>
                </div>
            </div>
        );
};

export default SchemeComponent;