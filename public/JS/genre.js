const genreValue = document.getElementById("genreValue").innerHTML;
console.log(genreValue);



let genreNumber = 0;

switch (genreValue){
    case "Horror" :
        genreNumber = 27;
        break;

    case "Drama" :
        genreNumber = 18;
        break;

    case "Adventure" :
        genreNumber = 12;
        break;

    case "Action" :
        genreNumber = 28;
        break;

    case "Comedy" :
        genreNumber = 35;
        break; 
}

console.log(genreNumber);

if (genreNumber == 27){

    //api call to get top 5 omdb horror movie titles 
    async function getMovie1(){
        let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
        let data = await res.json()
        return data;
    }
    getMovie1()
    .then(data => {

        let dataVariable = data.results;
        // let dataParsed = JSON.parse(dataVariable);
        console.log(dataVariable)
        
        let descriptionArray = []
        let dataArray = []

        for (var i = 0; i < dataVariable.length-17; i++) {
            dataArray.push(dataVariable[i].original_title)
            descriptionArray.push(dataVariable[i].overview)

        }
        
        document.getElementById('movieTitle1').innerHTML= (dataArray[0]);
        document.getElementById('movieTitle2').innerHTML= (dataArray[1]);
        document.getElementById('movieTitle3').innerHTML= (dataArray[2]);

        document.getElementById('movieDescription1').innerHTML= (descriptionArray[0]);
        document.getElementById('movieDescription2').innerHTML= (descriptionArray[1]);
        document.getElementById('movieDescription3').innerHTML= (descriptionArray[2]);


            async function getPoster(){
                let res = await fetch('https://omdbapi.com/?t='+  dataArray[0]  +'&apikey=43a1230f');
                let omdbData = await res.json()
                return omdbData;
            }
            getPoster()
            .then(omdbData => {
               
                let posterVar1 =  omdbData.Poster;
                document.getElementById('movie1').src=posterVar1
                console.log(posterVar1)
            })
                       
    })


        async function getMovie2(){
            let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
            let data = await res.json()
            return data;
        }
            getMovie2()
            .then(data => {

                let dataVariable = data.results;
                // let dataParsed = JSON.parse(dataVariable);
                console.log(dataVariable)

                let dataArray = []

                for (var i = 0; i < dataVariable.length-17; i++) {
                    dataArray.push(dataVariable[i].original_title)
                }
                console.log(dataArray);

                console.log(dataArray[1]);


                async function getPoster2(){
                    let res = await fetch('https://omdbapi.com/?t='+  dataArray[1]  +'&apikey=43a1230f');
                    let omdbData = await res.json()
                    return omdbData;
                }
                getPoster2()
                .then(omdbData => {
                
                    let posterVar2 =  omdbData.Poster;
                    document.getElementById('movie2').src=posterVar2
                    console.log(posterVar2)
                })
                        
        })

            async function getMovie3(){
                let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                let data = await res.json()
                return data;
            }
                getMovie3()
                .then(data => {

                    let dataVariable = data.results;
                    // let dataParsed = JSON.parse(dataVariable);
                    console.log(dataVariable)

                    let dataArray = []

                    for (var i = 0; i < dataVariable.length-17; i++) {
                        dataArray.push(dataVariable[i].original_title)
                    }
                    console.log(dataArray);

                    console.log(dataArray[2]);


                    async function getPoster3(){
                        let res = await fetch('https://omdbapi.com/?t='+  dataArray[2]  +'&apikey=43a1230f');
                        let omdbData = await res.json()
                        return omdbData;
                    }
                    getPoster3()
                    .then(omdbData => {
                    
                        let posterVar3 =  omdbData.Poster;
                        document.getElementById('movie3').src=posterVar3
                        console.log(posterVar3)
                    })
                            
            })
           
}
if (genreNumber == 18){

    //api call to get top 5 omdb horror movie titles 
    async function getMovie1(){
        let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
        let data = await res.json()
        return data;
    }
    getMovie1()
    .then(data => {

        let dataVariable = data.results;
        // let dataParsed = JSON.parse(dataVariable);
        console.log(dataVariable)
        let descriptionArray = []
        let dataArray = []

        for (var i = 0; i < dataVariable.length-17; i++) {
            dataArray.push(dataVariable[i].original_title)
            descriptionArray.push(dataVariable[i].overview)
        }
        
        document.getElementById('movieTitle1').innerHTML= (dataArray[0]);
        document.getElementById('movieTitle2').innerHTML= (dataArray[1]);
        document.getElementById('movieTitle3').innerHTML= (dataArray[2]);

        document.getElementById('movieDescription1').innerHTML= (descriptionArray[0]);
        document.getElementById('movieDescription2').innerHTML= (descriptionArray[1]);
        document.getElementById('movieDescription3').innerHTML= (descriptionArray[2]);
     


            async function getPoster(){
                let res = await fetch('https://omdbapi.com/?t='+  dataArray[0]  +'&apikey=43a1230f');
                let omdbData = await res.json()
                return omdbData;
            }
            getPoster()
            .then(omdbData => {
               
                let posterVar1 =  omdbData.Poster;
                document.getElementById('movie1').src=posterVar1
                console.log(posterVar1)
            })
                       
    })


        async function getMovie2(){
            let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
            let data = await res.json()
            return data;
        }
            getMovie2()
            .then(data => {

                let dataVariable = data.results;
        

                let dataArray = []

                for (var i = 0; i < dataVariable.length-17; i++) {
                    dataArray.push(dataVariable[i].original_title)
                }
   


                async function getPoster2(){
                    let res = await fetch('https://omdbapi.com/?t='+  dataArray[1]  +'&apikey=43a1230f');
                    let omdbData = await res.json()
                    return omdbData;
                }
                getPoster2()
                .then(omdbData => {
                
                    let posterVar2 =  omdbData.Poster;
                    document.getElementById('movie2').src=posterVar2
                    console.log(posterVar2)
                })
                        
        })

            async function getMovie3(){
                let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                let data = await res.json()
                return data;
            }
                getMovie3()
                .then(data => {

                    let dataVariable = data.results;
                    // let dataParsed = JSON.parse(dataVariable);
          
                    let descriptionArray = []
                    let dataArray = []

                    for (var i = 0; i < dataVariable.length-17; i++) {
                        dataArray.push(dataVariable[i].original_title)
                        descriptionArray.push(dataVariable[i].overview)

                    }
                

                    async function getPoster3(){
                        let res = await fetch('https://omdbapi.com/?t='+  dataArray[2]  +'&apikey=43a1230f');
                        let omdbData = await res.json()
                        return omdbData;
                    }
                    getPoster3()
                    .then(omdbData => {
                    
                        let posterVar3 =  omdbData.Poster;
                        document.getElementById('movie3').src=posterVar3
                        console.log(posterVar3)
                    })
                            
            })
        }
        if (genreNumber == 12){

            //api call to get top 5 omdb horror movie titles 
            async function getMovie1(){
                let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                let data = await res.json()
                return data;
            }
            getMovie1()
            .then(data => {
        
                let dataVariable = data.results;
              
                let descriptionArray = []

                let dataArray = []

                for (var i = 0; i < dataVariable.length-17; i++) {
                    dataArray.push(dataVariable[i].original_title)
                    descriptionArray.push(dataVariable[i].overview)

                }
                document.getElementById('movieTitle1').innerHTML= (dataArray[0]);
                document.getElementById('movieTitle2').innerHTML= (dataArray[1]);
                document.getElementById('movieTitle3').innerHTML= (dataArray[2]);

                document.getElementById('movieDescription1').innerHTML= (descriptionArray[0]);
                document.getElementById('movieDescription2').innerHTML= (descriptionArray[1]);
                document.getElementById('movieDescription3').innerHTML= (descriptionArray[2]);

                
           
        
        
                    async function getPoster(){
                        let res = await fetch('https://omdbapi.com/?t='+  dataArray[0]  +'&apikey=43a1230f');
                        let omdbData = await res.json()
                        return omdbData;
                    }
                    getPoster()
                    .then(omdbData => {
                       
                        let posterVar1 =  omdbData.Poster;
                        document.getElementById('movie1').src=posterVar1
                        console.log(posterVar1)
                    })
                               
            })
        
        
                async function getMovie2(){
                    let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                    let data = await res.json()
                    return data;
                }
                    getMovie2()
                    .then(data => {
        
                        let dataVariable = data.results;
                        // let dataParsed = JSON.parse(dataVariable);
                        

                        let dataArray = []
        
                        for (var i = 0; i < dataVariable.length-17; i++) {
                            dataArray.push(dataVariable[i].original_title)

                        }
                        
        
        
                        async function getPoster2(){
                            let res = await fetch('https://omdbapi.com/?t='+  dataArray[1]  +'&apikey=43a1230f');
                            let omdbData = await res.json()
                            return omdbData;
                        }
                        getPoster2()
                        .then(omdbData => {
                        
                            let posterVar2 =  omdbData.Poster;
                            document.getElementById('movie2').src=posterVar2
                            console.log(posterVar2)
                        })
                                
                })
        
                    async function getMovie3(){
                        let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                        let data = await res.json()
                        return data;
                    }
                        getMovie3()
                        .then(data => {
        
                            let dataVariable = data.results;
                           

                            let dataArray = []
        
                            for (var i = 0; i < dataVariable.length-17; i++) {
                                dataArray.push(dataVariable[i].original_title)

                            }
                
        
                            async function getPoster3(){
                                let res = await fetch('https://omdbapi.com/?t='+  dataArray[2]  +'&apikey=43a1230f');
                                let omdbData = await res.json()
                                return omdbData;
                            }
                            getPoster3()
                            .then(omdbData => {
                            
                                let posterVar3 =  omdbData.Poster;
                                document.getElementById('movie3').src=posterVar3
                                console.log(posterVar3)
                            })
                                    
                    })
                }
                if (genreNumber == 35){

                    //api call to get top 5 omdb horror movie titles 
                    async function getMovie1(){
                        let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                        let data = await res.json()
                        return data;
                    }
                    getMovie1()
                    .then(data => {
                
                        let dataVariable = data.results;
                        // let dataParsed = JSON.parse(dataVariable);
                        console.log(dataVariable)
                
                        let dataArray = []
                        let descriptionArray = []
                
                        for (var i = 0; i < dataVariable.length-16; i++) {
                            dataArray.push(dataVariable[i].original_title)
                            descriptionArray.push(dataVariable[i].overview)
                        }
                
                        document.getElementById('movieTitle1').innerHTML= (dataArray[1]);
                        document.getElementById('movieTitle2').innerHTML= (dataArray[2]);
                        document.getElementById('movieTitle3').innerHTML= (dataArray[3]);

                        document.getElementById('movieDescription1').innerHTML= (descriptionArray[1]);
                        document.getElementById('movieDescription2').innerHTML= (descriptionArray[2]);
                        document.getElementById('movieDescription3').innerHTML= (descriptionArray[3]);
                      
                
                            async function getPoster(){
                                let res = await fetch('https://omdbapi.com/?t='+  dataArray[1]  +'&apikey=43a1230f');
                                let omdbData = await res.json()
                                return omdbData;
                            }
                            getPoster()
                            .then(omdbData => {
                            
                                let posterVar1 =  omdbData.Poster;
                                document.getElementById('movie1').src=posterVar1
                                console.log(posterVar1)
                            })
                                       
                    })
                
                
                        async function getMovie2(){
                            let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                            let data = await res.json()
                            return data;
                        }
                            getMovie2()
                            .then(data => {
                
                                let dataVariable = data.results;
                           
                                let dataArray = []
                
                                for (var i = 0; i < dataVariable.length-16; i++) {
                                    dataArray.push(dataVariable[i].original_title)

                                }
                               
                
                                async function getPoster2(){
                                    let res = await fetch('https://omdbapi.com/?t='+  dataArray[2]  +'&apikey=43a1230f');
                                    let omdbData = await res.json()
                                    return omdbData;
                                }
                                getPoster2()
                                .then(omdbData => {
                                
                                    let posterVar2 =  omdbData.Poster;
                                    document.getElementById('movie2').src=posterVar2
                                    console.log(posterVar2)
                                })
                                        
                        })
                
                            async function getMovie3(){
                                let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                                let data = await res.json()
                                return data;
                            }
                                getMovie3()
                                .then(data => {
                
                                    let dataVariable = data.results;
                                  
                                    let dataArray = []
                
                                    for (var i = 0; i < dataVariable.length-16; i++) {
                                        dataArray.push(dataVariable[i].original_title)

                                    }
                             
                                    async function getPoster3(){
                                        let res = await fetch('https://omdbapi.com/?t='+  dataArray[3]  +'&apikey=43a1230f');
                                        let omdbData = await res.json()
                                        return omdbData;
                                    }
                                    getPoster3()
                                    .then(omdbData => {
                                    
                                        let posterVar3 =  omdbData.Poster;
                                        document.getElementById('movie3').src=posterVar3
                                        console.log(posterVar3)
                                    })
                                            
                            })
                        }
                        if (genreNumber == 28){

                            //api call to get top 5 omdb horror movie titles 
                            async function getMovie1(){
                                let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                                let data = await res.json()
                                return data;
                            }
                            getMovie1()
                            .then(data => {
                        
                                let dataVariable = data.results;
                           
                                let descriptionArray = []

                                let dataArray = []
                        
                                for (var i = 0; i < dataVariable.length-17; i++) {
                                    dataArray.push(dataVariable[i].original_title)
                                    descriptionArray.push(dataVariable[i].overview)

                                }
                                document.getElementById('movieTitle1').innerHTML= (dataArray[0]);
                                document.getElementById('movieTitle2').innerHTML= (dataArray[1]);
                                document.getElementById('movieTitle3').innerHTML= (dataArray[2]);
        
                                document.getElementById('movieDescription1').innerHTML= (descriptionArray[0]);
                                document.getElementById('movieDescription2').innerHTML= (descriptionArray[1]);
                                document.getElementById('movieDescription3').innerHTML= (descriptionArray[2]);
                              
                        
                                    async function getPoster(){
                                        let res = await fetch('https://omdbapi.com/?t='+  dataArray[0]  +'&apikey=43a1230f');
                                        let omdbData = await res.json()
                                        return omdbData;
                                    }
                                    getPoster()
                                    .then(omdbData => {
                                       
                                        let posterVar1 =  omdbData.Poster;
                                        document.getElementById('movie1').src=posterVar1
                                        console.log(posterVar1)
                                    })
                                               
                            })
                        
                        
                                async function getMovie2(){
                                    let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                                    let data = await res.json()
                                    return data;
                                }
                                    getMovie2()
                                    .then(data => {
                        
                                        let dataVariable = data.results;
                                        // let dataParsed = JSON.parse(dataVariable);
                                        console.log(dataVariable)

                                        let dataArray = []
                        
                                        for (var i = 0; i < dataVariable.length-17; i++) {
                                            dataArray.push(dataVariable[i].original_title)

                                        }
              
                                        async function getPoster2(){
                                            let res = await fetch('https://omdbapi.com/?t='+  dataArray[1]  +'&apikey=43a1230f');
                                            let omdbData = await res.json()
                                            return omdbData;
                                        }
                                        getPoster2()
                                        .then(omdbData => {
                                        
                                            let posterVar2 =  omdbData.Poster;
                                            document.getElementById('movie2').src=posterVar2
                                            console.log(posterVar2)
                                        })
                                                
                                })
                        
                                    async function getMovie3(){
                                        let res = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=100&api_key=acc9f3c5c9182124f176740523389662&language=en-US&with_original_language=en');
                                        let data = await res.json()
                                        return data;
                                    }
                                        getMovie3()
                                        .then(data => {
                        
                                            let dataVariable = data.results;
                                      
                                            let dataArray = []
                        
                                            for (var i = 0; i < dataVariable.length-17; i++) {
                                                dataArray.push(dataVariable[i].original_title)

                                            }
                                         
                        
                                            async function getPoster3(){
                                                let res = await fetch('https://omdbapi.com/?t='+  dataArray[2]  +'&apikey=43a1230f');
                                                let omdbData = await res.json()
                                                return omdbData;
                                            }
                                            getPoster3()
                                            .then(omdbData => {
                                            
                                                let posterVar3 =  omdbData.Poster;
                                                document.getElementById('movie3').src=posterVar3
                                                console.log(posterVar3)
                                            })
                                                    
                                    })
                                }
                