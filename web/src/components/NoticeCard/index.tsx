import React, { Fragment, useEffect, useState } from 'react';
import { IonCard, IonLoading, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonImg, IonButton } from '@ionic/react'
import Api from '../../services/Api'

import './index.css'

interface News {
    status: string,
    totalResults: Number,
    articles: [
        {
            source: {
                id: string,
                name: string
            },
            author: string,
            title: string,
            description: string,
            url: string,
            urlToImage: string,
            publishedAt: string,
            content: string
        }
    ]
}


interface NoticeCardPros {
    notice: string,
}

let doRequest = true;

const NoticeCard: React.FC<NoticeCardPros> = (props) => {


    /*  useStates */
    const [news, setNews] = useState<News>();
    const [showLoading, setShowLoading] = useState<boolean>(false);



    const getNews = async (notice: string) => {

        if (doRequest === true) {

            switch (notice) {
                case 'health': {
                    setShowLoading(true);
                    await Api.getHealthNews().then((response) => {
                        setNews(response)
                        setShowLoading(false);
                    }).catch((err) => {
                        alert(err);
                    })

                }
                    break;

                case 'brazil': {
                    setShowLoading(true)
                    await Api.getBRNews().then(async (response) => {
                        setNews(response);
                        setShowLoading(false);
                    }).catch((err) => {
                        alert(err);
                    })
                }
                    break;

                case 'business': {
                    setShowLoading(true)
                    await Api.getBusinessNews().then((response) => {
                        setNews(response);
                        setShowLoading(false);
                    }).catch((err) => {
                        alert(err);
                    })
                }
                    break;

                case 'technology': {
                    setShowLoading(false);
                    await Api.getTechnologyNews().then((response) => {
                        setNews(response);
                        setShowLoading(false);
                    }).catch((err) => {
                        alert(err);
                    })
                }
                    break;
                case 'sport': {
                    setShowLoading(true);
                    await Api.getSportsNews().then((response) => {
                        setNews(response);
                        setShowLoading(false);
                    }).catch((err) => {
                        alert(err);
                    })

                }
                    break;

            }

            doRequest = (false);
        }

    }

    const pegandoTudoAntesDoPonto = (value: string) => {
        return value.split('.', 1)[0].toUpperCase()
    }

    const isAutorIgualLink = (value: string) => {

        if (value == null) {
            return false
        }

        return (value.indexOf('.') == -1)
    }


    useEffect(() => {

        const enableRequest = () => {
            doRequest = true;
        }

        setInterval(enableRequest, 1000);

        getNews(props.notice);
    }, [props.notice])

    return (
        <Fragment>

            {news && !showLoading ? news.articles.map((article, index) =>


                <IonCard className="notice-card --container" key={index}>
                    <IonCardHeader>

                        <IonImg src={article.urlToImage ? article.urlToImage : ''}></IonImg>
                        <IonCardSubtitle>{isAutorIgualLink(article.author) ? article.author : pegandoTudoAntesDoPonto(article.source.name)} - {new Date(article.publishedAt).toLocaleDateString()}</IonCardSubtitle>
                        <IonCardTitle>{article.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {article.description}
                    </IonCardContent>
                    <IonButton
                        color="success"
                        expand="block"
                        href={article.url}
                        target="blank">
                        Fonte
                    </IonButton>
                </IonCard>

            ) : <IonLoading
                    isOpen={showLoading}
                    onDidDismiss={() => { setShowLoading(false) }}
                    message={'Carregando notícias...'}
                    duration={2000}
                />}

        </Fragment>
    );
}

export default NoticeCard;