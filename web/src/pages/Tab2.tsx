import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import NoticeCard from '../components/NoticeCard';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agora no Brasil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Agora no Brasil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NoticeCard notice="brazil"></NoticeCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
