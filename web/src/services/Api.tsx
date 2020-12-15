import axios from 'axios'

// api key é só fazer uma conta no newsapi e usar a sua.
// const api_key = "suaapikey"

const urlBusiness = "http://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=f3bb0116c36b4461923dd89651c1a2aa"
const urlHealth = "http://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=f3bb0116c36b4461923dd89651c1a2aa"
const urlTechnology = "http://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=f3bb0116c36b4461923dd89651c1a2aa"
const urlSport = "http://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=f3bb0116c36b4461923dd89651c1a2aa"
const urlBrazil = "https://newsapi.org/v2/top-headlines?country=br&apiKey=f3bb0116c36b4461923dd89651c1a2aa"

const Api = {
    getBRNews: async () => {

        let dataAtual = new Date().toLocaleDateString()
        let dia = dataAtual.slice(0, 2);
        let mes = dataAtual.slice(3, 5);
        let ano = dataAtual.slice(6);
        dataAtual = `${dia}-${mes}-${ano}`



        return await axios.get(`http://localhost:5000/news-brazil/${dataAtual}`).then(async response => {

            if (response.data.error) {
                console.log(response.data.error);


                let noticias = null;

                let keepAlive = true;
                let keepAliveCount = 0;
                while (keepAliveCount < 5 && keepAlive === true) {
                    await axios.get(`${urlBrazil}`).then(response => {

                        console.log('then brazil');

                        noticias = response.data

                        keepAlive = false;
                        ++keepAliveCount;
                    }).catch(err => {
                        console.log(err);

                        console.log('catch brazil');


                        noticias = require('./brazil.json');
                    })
                }




                await axios.post(`http://localhost:5000/news-brazil/create`, noticias).then(response => {
                    console.log('then post');

                    console.log(response);

                    return response.data
                }).catch(err => {
                    console.log({ err });
                    console.log('catch post');


                })
            }
            else {
                console.log('Notícia encontrada');

                return response.data;
            }

        })

    },
    getHealthNews: async () => {

        let dataAtual = new Date().toLocaleDateString()
        let dia = dataAtual.slice(0, 2);
        let mes = dataAtual.slice(3, 5);
        let ano = dataAtual.slice(6);
        dataAtual = `${dia}-${mes}-${ano}`



        return await axios.get(`http://localhost:5000/news-health/${dataAtual}`).then(async response => {

            if (response.data.error) {
                console.log(response.data.error);


                let noticias = null;

                let keepAlive = true;
                let keepAliveCount = 0;
                while (keepAliveCount < 5 && keepAlive === true) {
                    await axios.get(`${urlHealth}`).then(response => {

                        console.log('newsapi: then health');

                        noticias = response.data

                        keepAlive = false;
                        ++keepAliveCount;
                    }).catch(err => {
                        console.log(err);

                        console.log('newsapi: catch health');


                        noticias = require('./health.json');
                    })
                }




                await axios.post(`http://localhost:5000/news-health/create`, noticias).then(response => {
                    console.log('mongo: then post');

                    return response.data
                }).catch(err => {
                    console.log({ err });
                    console.log('mongo: catch post');

                    return require('./health.json')

                })
            }
            else {
                console.log('Notícia encontrada');

                return response.data;
            }

        })
    },
    getTechnologyNews: async () => {

        let dataAtual = new Date().toLocaleDateString()
        let dia = dataAtual.slice(0, 2);
        let mes = dataAtual.slice(3, 5);
        let ano = dataAtual.slice(6);
        dataAtual = `${dia}-${mes}-${ano}`


        return await axios.get(`http://localhost:5000/news-technology/${dataAtual}`).then(async response => {

            if (response.data.error) {
                console.log(response.data.error);


                let noticias = null;

                let keepAlive = true;
                let keepAliveCount = 0;
                while (keepAliveCount < 5 && keepAlive === true) {
                    await axios.get(`${urlTechnology}`).then(response => {

                        console.log('then brazil');

                        noticias = response.data

                        keepAlive = false;
                        ++keepAliveCount;
                    }).catch(err => {
                        console.log(err);

                        console.log('catch brazil');


                        noticias = require('./categorias-json/brazil-technology.json');
                    })
                }




                await axios.post(`http://localhost:5000/news-technology/create`, noticias).then(response => {
                    console.log('then post');

                    console.log(response);

                    return response.data
                }).catch(err => {
                    console.log({ err });
                    console.log('catch post');


                })
            }
            else {
                console.log('Notícia encontrada');

                return response.data;
            }

        })
    },
    getSportsNews: async () => {

        let dataAtual = new Date().toLocaleDateString()
        let dia = dataAtual.slice(0, 2);
        let mes = dataAtual.slice(3, 5);
        let ano = dataAtual.slice(6);
        dataAtual = `${dia}-${mes}-${ano}`


        return await axios.get(`http://localhost:5000/news-sport/${dataAtual}`).then(async response => {

            if (response.data.error) {
                console.log(response.data.error);


                let noticias = null;

                let keepAlive = true;
                let keepAliveCount = 0;
                while (keepAliveCount < 5 && keepAlive === true) {
                    await axios.get(`${urlSport}`).then(response => {

                        console.log('then sport');

                        noticias = response.data

                        keepAlive = false;
                        ++keepAliveCount;
                    }).catch(err => {
                        console.log(err);

                        console.log('catch sport');


                        noticias = require('./categorias-json/brazil-sports.json');
                    })
                }




                await axios.post(`http://localhost:5000/news-sport/create`, noticias).then(response => {
                    console.log('then post');

                    console.log(response);
                    console.log(response.data);
                    

                    return response.data
                }).catch(err => {
                    console.log({ err });
                    console.log('catch post');


                })
            }
            else {
                console.log('Notícia encontrada');

                return response.data;
            }

        })
    },
    getBusinessNews: async () => {

        let dataAtual = new Date().toLocaleDateString()
        let dia = dataAtual.slice(0, 2);
        let mes = dataAtual.slice(3, 5);
        let ano = dataAtual.slice(6);
        dataAtual = `${dia}-${mes}-${ano}`


        return await axios.get(`http://localhost:5000/news-business/${dataAtual}`).then(async response => {

            if (response.data.error) {
                console.log(response.data.error);


                let noticias = null;

                let keepAlive = true;
                let keepAliveCount = 0;
                while (keepAliveCount < 5 && keepAlive === true) {
                    await axios.get(`${urlBusiness}`).then(response => {

                        console.log('then sport');

                        noticias = response.data

                        keepAlive = false;
                        ++keepAliveCount;
                    }).catch(err => {
                        console.log(err);

                        console.log('catch sport');


                        noticias = require('./categorias-json/brazil-business.json');
                    })
                }




                await axios.post(`http://localhost:5000/news-business/create`, noticias).then(response => {
                    console.log('then post');

                    console.log(response);
                    console.log(response.data);
                    

                    return response.data
                }).catch(err => {
                    console.log({ err });
                    console.log('catch post');


                })
            }
            else {
                console.log('Notícia encontrada');

                return response.data;
            }

        })
    }


}

export default Api;