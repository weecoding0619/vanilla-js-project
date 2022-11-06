const images = [
  "https://cdn.pixabay.com/photo/2019/06/13/11/22/golden-gate-bridge-4271364_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_960_720.jpg",
  "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://cdn.pixabay.com/photo/2020/11/14/19/42/road-5743713_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/11/27/22/34/monument-valley-1863977_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/06/16/16/17/road-3478977_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/07/16/09/11/road-2508733_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg"
]
const chosenImage = images[Math.floor(Math.random()*images.length)];

bgImage.style.backgroundImage = 'url("'+chosenImage+'")'