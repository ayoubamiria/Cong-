import React from 'react';
import '../Pages/page-css/securite.css';

const Button = ({ className, text, ...props }) => (
    <button className={className} {...props}>{text}</button>
);

const ButtonDefault = ({ className, text, textClassName, ...props }) => (
    <button className={className} {...props}>
        <span className={textClassName}>{text}</span>
    </button>
);

const Securite = () => {
    return (
        <div className="profile">
            <div className="div">
                <div className="group">
                    <div className="group-2">
                        <div className="text-wrapper">Privacy Policy</div>
                        <div className="text-wrapper-2">Terms of Use</div>
                        <div className="text-wrapper-3">Legal</div>
                        <p className="p">Copyright © 2024 Nura Operations Pty Ltd. All rights reserved.</p>
                    </div>
                </div>
                <div className="overlap">
                    <div className="group-3">
                        <div className="notification"></div>
                        <div className="PROFI-le"></div>
                        <div className="text-wrapper-4"></div>
                    </div>
                    <Button className="button-instance" divClassName="design-component-instance-node" text="SE DECONNECTER" />
                </div>
                <div className="overlap-group">
                    <div className="group-4">
                        <div className="email">
                            <div className="div-wrapper">
                                <div className="text-wrapper-5">**************************************</div>
                            </div>
                            <div className="text-wrapper-6">Nouveau mot de passe</div>
                        </div>
                        <div className="email-2">
                            <div className="div-wrapper">
                                <div className="text-wrapper-5">*****************</div>
                            </div>
                            <div className="text-wrapper-6">Mot de passe actuel</div>
                        </div>
                        <div className="address">
                            <div className="overlap-2">
                                <div className="text-wrapper-7">*************************************</div>
                            </div>
                            <p className="text-wrapper-8">Retapez le nouveau mot de passe</p>
                        </div>
                    </div>
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <div className="text-wrapper-9">Securite</div>
                    <div className="text-wrapper-10">Solde</div>
                    <div className="text-wrapper-11">Informations</div>
                </div>
                <ButtonDefault className="button-default-instance" text="Enregistrer" />
                <ButtonDefault className="button-default-3" text="Annuler" textClassName="button-default-2" />
                <div className="group-wrapper">
                    <div className="group-2">
                        <div className="text-wrapper">Privacy Policy</div>
                        <div className="text-wrapper-2">Terms of Use</div>
                        <div className="text-wrapper-3">Legal</div>
                        <p className="p">Copyright © 2024 Nura Operations Pty Ltd. All rights reserved.</p>
                    </div>
                </div>
                <div className="text-wrapper-12">Charles deo</div>
                <img className="jpg" alt="Jpg" src="about01-jpg.png" />
            </div>
        </div>
    );
};

export default Securite;
