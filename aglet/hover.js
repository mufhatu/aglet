var video=document.querySelectorAll(video);

video.forEach(video=> {
    video.addEventlistener("mouseover",function(){
        this.play();
    })

    video.addEventlistener("mouseout",function(){
       this.pause() ;
    })
});