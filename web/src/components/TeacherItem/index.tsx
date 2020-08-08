import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teachers-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEOMo06DoDicQ/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=GGcs1SGhNb-E7UoLbjGajexZO2U-7sKWCGUjFUzR4oY" alt="Bruno Henrique"/>
            <div>
                <strong>Bruno Henrique</strong>
                <span>Matemática</span>
            </div>
        </header>
        <p>
            Entusiasta de tecnologia baseada em matemática.
            <br/><br/>
            Apaixonado por explorar e vasculhar a internet em busca de conhecimento.
        </p>

        <footer>
            <p>
                Preço/hora 
                <strong>R$ 90,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;
