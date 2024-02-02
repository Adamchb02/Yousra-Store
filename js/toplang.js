  var dataReload=document.querySelectorAll("[data-reload]");
  var conc=document.getElementById("connexionbtn");
  var concs=document.getElementById("connexionbtn2");
  var length=dataReload.length;
  var langueactuelle =localStorage.getItem("lang");

const ar=["بحث","خيارات", "حسابي", "إضافة إعلان", "إعلاناتي", "عروض و خدمات", "- حسابي", "- إضافة إعلان", "- إعلاناتي", "- عروض و خدمات"];

const fr=["Recherche","Option","Profil","Ajouter une annonce","Mes annonces","Pub & Offres","- Profil","- Ajouter une annonce","- Mes annonces","- Pub & Offres",]
changelanguage(langueactuelle,conncexionetat);
    //button onclick function
function changelanguage(a,b) {
      var l=a;
  if(a=="#AR"){
      if(b==0){conc.innerText="تسجيل الدخول";
               concs.innerText="تسجيل الدخول";
    }
      else{conc.innerText="تسجيل الخروج";
           concs.innerText="تسجيل الخروج";
    }
      localStorage.setItem("lang","#AR");
      document.getElementById("testlang").dir="rtl"; 
    for(i = 0; i<length; i++ ){dataReload[i].innerText=ar[i];}
     changelanguagepage(l); 
    }
    
  else{ 
    
      if(b==0){conc.innerText="Se connecter";
               concs.innerText="Se connecter";
    }
      else{conc.innerText="Déconnexion";
          concs.innerText="Déconnexion";
    }
      localStorage.setItem("lang","#FR");
      document.getElementById("testlang").dir="ltr"; 
    for(i = 0; i<length; i++ ){dataReload[i].innerText=fr[i];} 
    changelanguagepage(l);  
}
}