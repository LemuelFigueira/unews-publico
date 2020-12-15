import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import NoticeCard from '../components/NoticeCard'

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Saúde!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Saúde!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NoticeCard notice='health'></NoticeCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
