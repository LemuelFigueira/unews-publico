import { IonItem, IonLabel, IonSelect, IonSelectOption, IonIcon } from '@ionic/react'
import { closeOutline, removeCircleOutline } from 'ionicons/icons';
import React, { Fragment, useState } from 'react'

import NoticeCard from '../NoticeCard';

const Category: React.FC = () => {

    const [category, setCategory] = useState<string>('');
    const [displaycategory, setDisplayCategory] = useState<string>('');
    const handleCategory = (value: string) => {
        switch (value) {
            case 'health':
                setDisplayCategory('Saúde');
                break;

            case 'sport':
                setDisplayCategory('Esporte');
                break;

            case 'technology':
                setDisplayCategory('Técnologia');
                break;

            case 'business':
                setDisplayCategory('Negócios');
                break;
            case '':
                setDisplayCategory('');
                break;
        }
        setCategory(value);
        localStorage.setItem('Category', value);
    }

    return (
        <Fragment>

            <IonItem className="category-container">
                <IonLabel>Selecione uma categoria</IonLabel>
                {/* <IonSelect value={category ? category : localStorage.getItem('Category') } onIonChange={(e) => { handleCategory(e.detail.value) }}> */}
                <IonSelect value={category} onIonChange={(e) => { handleCategory(e.detail.value) }}>
                    <IonSelectOption value="health">Saúde</IonSelectOption>
                    <IonSelectOption value="sport">Esporte</IonSelectOption>
                    <IonSelectOption value="technology">Tecnologia</IonSelectOption>
                    <IonSelectOption value="business">Negócios</IonSelectOption>
                </IonSelect>
            </IonItem>
            { displaycategory != '' ?
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 'bolder',
                    marginTop: '10px',
                    marginBottom: '10px'
                }}>
                    <div style={{
                        backgroundColor: "#0f3",
                        color: "#fff",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '20px',
                        paddingRight: '20px',
                        paddingLeft: '20px',
                        width: 'auto',
                        height: '50px'
                    }}>
                        <IonLabel style={{
                            paddingRight: '10px',
                            fontSize: '1.4em'
                        }}>{displaycategory}</IonLabel>


                    </div>
                    <div style={{
                        backgroundColor: "#a1f",
                        opacity: "50%" ,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        marginLeft: "10px",
                        paddingRight: "5px",
                        paddingLeft: "5px",
                        width: '25px',
                        height: '25px'

                    }}>
                        <IonIcon
                            icon={closeOutline}
                            size="large"
                            onClick={() => { handleCategory('') }}
                            style={{
                                color: '#fff'
                            }}>

                        </IonIcon>
                    </div>
                </div>
                : ''
            }
            { category != '' ?
                <NoticeCard notice={category}></NoticeCard>
                : ''
            }

        </Fragment>
    )
}

export default Category;