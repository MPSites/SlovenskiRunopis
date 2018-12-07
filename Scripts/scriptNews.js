		var mycomments=new Array()
		mycomments[0]=' <img src="img/commGIF.png" alt="perun">Mališa, 21.07.2011<p><em>"... svet koji magično živi van naše volje i bez obzira na naše saznanje koje kao da se leluja na vetru sećanja između poznatog, izmaštanog... jer, možda samo naša nana još uvek može da nam kaže nešto o prognanim bićima od kojih bežimo i bez toga da nas ona proganjaju,ali, koja nas stalno, kroz male prozore iz nama poznate stvarnosti vuku u svoj paralelni svet večnosti... Sve se stapa: crteži koje čitamo i razumemo njihovu ulogu po arhetipskom značenju... već posle prve stranice ova knjiga postaje važna mapa tog sveta i riznica saznanja, enciklopedija bića i celog tog sveta čije male oči, već posle prvog susreta, pale svetla u nama koja zauvek svetle, dajući našem biću iskričav osmeh."</em></p>'
		mycomments[1]=' <img src="img/commGIF.png" alt="perun">Gordana Jevtović, 31.07.2011<p><em>"Sjajno! Koja su to bića, legende, voravanja i bogovi nastali na našem području? Raznovrsne informacije, potkrepljene istraživanjem, sa nezaboravnim ilustracijama. Knjiga koju morate imati, knjiga koju ćete želeti da poklanjate!"</em></p>'
		mycomments[2]=' <img src="img/commGIF.png" alt="perun">Mila, 25.08.2014.<p><em>"Kakvo je pozitivno iznenađenje ova knjiga za mene bila. Stvarno je vredi imati u svojoj kućnoj biblioteci i s vremena na vreme prelistavati kao i deliti sa drugima zanimljive priče. Daje odličan uviđaj u našu istoriju pre prihvatanja hrišćanstva, ali i posle. Neverovatno je koliko se toga iz mitologije provlači i danas kroz naš jezik i kulturu. Sve u svemu, informacije su odlične. Nadam se da se planira i drugi deo."</em> </p>'
		mycomments[3]=' <img src="img/commGIF.png" alt="perun">Ivan Pavlovski, 21.08.2013.<p><em>"Fenomenalna knjiga, sedam godina pripremana. Toliko toga znamo i učimo o Grčkoj, Egipatskoj pa i Nordijskoj mitologiji a ponajmanje o sopstvenoj. Pored mitova, iz knjige saznajemo zanimljivosti o prvom slovenskom pismu (glagoljici), životu i običajima drevnih Slovena. Neki od tih običaja su se održali do danas. Tvrde korice, pisana ćirilicom, bogato ilustrovana slikama naših umetnika a i cena joj je povoljna. Jedina mana po meni je da je knjiga mogla biti duža."</em></p>'
		
		var i=0

		function altercomments(){
		comments.innerHTML=mycomments[i];
		i=(i==mycomments.length-1)? 0 : i+1
		setTimeout("altercomments()", 5000)
		}

		window.onload=altercomments
