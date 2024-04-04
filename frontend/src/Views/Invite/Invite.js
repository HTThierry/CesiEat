import React, { useState } from 'react';
import './Invite.css';
import BlackHeader from "../Headers/BlackHeader";
import Footer from "../Footer/Footer";
import { FaCopy, FaRegCopy } from 'react-icons/fa';
import Navbar from "../Main/Navbar/Navbar";

const Invite = () => {

    const [copiedIndex, setCopiedIndex] = useState(null);

    const codes = [
        { label: 'Code client', code: 'XXXXXX' },
        { label: 'Code livreur', code: 'XXXXXX' },
        { label: 'Code restaurateur', code: 'XXXXXX' }
    ];

/*
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        fetch('/api/codes')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setCodes(data);
            })
            .catch(error => {
                console.error('Error fetching codes:', error);
            });
    }, []);
*/

    const copyToClipboard = (code, index) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopiedIndex(index);

            setTimeout(() => {
                setCopiedIndex(-1);
            }, 1000);
        }, () => {
            console.error('Failed to copy code');
        });
    };

    return (
        <div className="invite-page CesiEatsMedium">
            <BlackHeader
                leftIcons={
                    <div className="left-icons">
                        <Navbar/>
                    </div>
                }
            />
            <div className="container">
                <h2>Votre/vos code(s) de parrainage :</h2>
                <div>
                    {codes.map((item, index) => (
                        <div key={index}
                             className="code">
                            <span>{item.label}: {item.code}</span>
                            <div className="copy-container">
                                <button onClick={() => copyToClipboard(item.code, index)}
                                        title="Copier le code"
                                        style={{backgroundColor: 'transparent', border: 'none'}}>
                                    {copiedIndex === index ? <FaCopy/> : <FaRegCopy/>}
                                </button>
                                {copiedIndex === index && (
                                    <div className="copied-text">Copié !</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <Footer/>
        </div>

    );
};

export default Invite;

