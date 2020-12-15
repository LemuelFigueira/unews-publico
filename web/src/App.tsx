import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { fitnessOutline, beerOutline, bookmarkOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* initialize all news */
import Api from './services/Api';
import { stringify } from 'querystring';



const App: React.FC = () => {


  let numero:string = '1';

  useEffect(() => {

    const loadAll = async (times:number) => {

      await Api.getBRNews();
      await Api.getBusinessNews();
      await Api.getHealthNews();
      await Api.getSportsNews();
      await Api.getTechnologyNews();


      if(localStorage.getItem('Contador')) {
        let verificador = localStorage.getItem('Contador');

        if (verificador == '1') {
          window.location.reload()

          localStorage.setItem('Contador', '2');

          return
        }
      }else {
        localStorage.setItem('Contador', '2');

        window.location.reload();
      }
      
      
  
    }

    loadAll(1)

  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/saude" component={Tab1} exact={true} />
            <Route path="/agora-no-brasil" component={Tab2} exact={true} />
            <Route path="/categorias" component={Tab3} />
            <Route path="/" render={() => <Redirect to="/agora-no-brasil" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="saude" href="/saude">
              <IonIcon icon={fitnessOutline} />
              <IonLabel>Saúde</IonLabel>
            </IonTabButton>
            <IonTabButton tab="agora-no-brasil" href="/agora-no-brasil">
              <IonIcon icon={beerOutline} />
              <IonLabel>Agora no Brasil</IonLabel>
            </IonTabButton>
            <IonTabButton tab="categorias" href="/categorias">
              <IonIcon icon={bookmarkOutline} />
              <IonLabel>categorias</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )

}

export default App;
