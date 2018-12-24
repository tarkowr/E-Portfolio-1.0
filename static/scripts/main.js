const maxSmallScreen = 1020;
const maxScroll = 100;
const scrollBarWidth = 17;
const numberOfProjectToShow = 2;
const githubApiUrl = "https://api.github.com/users/tarkowr/repos";

window.onload = function() {
    MobileNavBar();
    HandleApiService(DisplayLastUpdatedValues);
};

async function HandleApiService(callback){
    let data = new Object();
    data = await ApiService(githubApiUrl);
    callback(data);
}

//Hide or unhide nav bar options when the navbar is in mobile upon icon click
function MobileNavBar(){
    document.getElementById("nav-bars").addEventListener("click", function(){
        let links = document.getElementsByClassName('nav-links');
    
        if(links[0].style.display == "inline-block"){
            for(let i = 0; i < links.length; i++){
                links[i].style.display = "none";
            }
        }
        else{
            for(let i = 0; i < links.length; i++){
                links[i].style.display = "inline-block";
            }
        }
    });
}

function DisplayLastUpdatedValues(data){
    const eportfolioDate = document.getElementById("eportfolio-date");
    const cit228Date = document.getElementById("cit228-date");
    const cit195Date = document.getElementById("cit195-date");
    const cit255Date = document.getElementById("cit255-date");

    eportfolioDate.innerHTML = GetDateFromGithubApi(ConvertJsonToObject(data), "ePortfolio");
    cit228Date.innerHTML = GetDateFromGithubApi(ConvertJsonToObject(data), "CIT-228-Discussion-Forum");
    cit195Date.innerHTML = GetDateFromGithubApi(ConvertJsonToObject(data), "CIT195-Final-Project");
    cit255Date.innerHTML = GetDateFromGithubApi(ConvertJsonToObject(data), "CIT255FinalApplication");
}



  