export default function Page() {
  return (
<div style={{minHeight:"100vh",background:"#0b0d0a",overflow:"hidden"}}>

  <nav style={{position:"sticky",top:"0",zIndex:"50",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"24px",padding:"12px 24px",background:"rgba(11,13,10,.86)",backdropFilter:"blur(10px)",borderBottom:"1px solid #1f241d"}}>
    <a href="#top" style={{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",color:"#f2f4ee"}}>
      <img src="assets/icon.webp" alt="" style={{width:"36px",height:"36px",borderRadius:"6px",border:"1px solid #3a4036",objectFit:"cover"}} />
      <span style={{font:"400 18px/1 var(--font-russo),Verdana,sans-serif",letterSpacing:".04em"}}>SKILLTANKI</span>
    </a>
    <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"10px 28px",font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".16em",textTransform:"uppercase"}}>
      <a href="#why" style={{color:"#9aa094",textDecoration:"none"}} className="navlink">Why</a>
      <a href="#modes" style={{color:"#9aa094",textDecoration:"none"}} className="navlink">Modes</a>
      <a href="#tanks" style={{color:"#9aa094",textDecoration:"none"}} className="navlink">Tanks</a>
      <a href="#maps" style={{color:"#9aa094",textDecoration:"none"}} className="navlink">Maps</a>
      <a href="#controls" style={{color:"#9aa094",textDecoration:"none"}} className="navlink">Controls</a>
      <a href="#mobile" style={{color:"#9aa094",textDecoration:"none"}} className="navlink">Mobile</a>
      <a href="#gamepad" style={{color:"#9aa094",textDecoration:"none"}} className="navlink">Gamepad</a>
    </div>
    <a href="https://mobile.skilltanki.workers.dev/" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",height:"40px",padding:"0 22px",borderRadius:"5px",font:"700 13px/1 Verdana,Geneva,sans-serif",letterSpacing:".1em",textTransform:"uppercase",color:"#fff",textDecoration:"none",textShadow:"0 1px 2px rgba(0,0,0,.7)",background:"linear-gradient(#86dc74 0%,#4fb653 48%,#2f8f36 52%,#256f2a 100%)",border:"1px solid #163f18",boxShadow:"inset 0 1px 0 rgba(255,255,255,.4),inset 0 -2px 0 rgba(0,0,0,.35)",transition:"filter .15s"}} className="btn">Play</a>
  </nav>

  <header id="top" data-screen-label="Hero" style={{position:"relative",minHeight:"calc(100vh - 65px)",display:"grid",placeItems:"center",padding:"72px 24px 96px",background:"url(assets/art-2.webp) center 40%/cover no-repeat"}}>
    <div style={{position:"absolute",inset:"0",background:"linear-gradient(180deg,rgba(11,13,10,.55) 0%,rgba(11,13,10,.35) 40%,rgba(11,13,10,.92) 85%,#0b0d0a 100%)"}}></div>
    <div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"28px",maxWidth:"860px"}}>
      <img src="assets/logo.webp" alt="SkillTanki" style={{width:"min(460px,78vw)",height:"auto",filter:"drop-shadow(0 12px 30px rgba(0,0,0,.7))"}} />
      <div style={{display:"flex",flexDirection:"column",gap:"18px",alignItems:"center"}}>
        <h1 style={{margin:"0",font:"400 clamp(30px,5vw,56px)/1.08 var(--font-russo),Verdana,sans-serif",color:"#fff",textShadow:"0 3px 18px rgba(0,0,0,.8)",textWrap:"balance"}}>2010-era tanks, the way you remember them</h1>
        <p style={{margin:"0",maxWidth:"640px",font:"17px/1.6 Verdana,Geneva,sans-serif",color:"#e4e8de",textShadow:"0 1px 8px rgba(0,0,0,.9)",textWrap:"pretty"}}>A browser tank arcade in the spirit of the classic: the same angular hulls — Wasp, Hunter, Titan, Dictator — the cozy “box” maps, and that feeling of a heavy machine on suspension. Open the page, and a few seconds later you're in battle.</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"28px"}}>
        <a href="https://mobile.skilltanki.workers.dev/" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",height:"72px",padding:"0 72px",borderRadius:"7px",font:"700 26px/1 Verdana,Geneva,sans-serif",letterSpacing:".14em",textTransform:"uppercase",color:"#fff",textDecoration:"none",textShadow:"0 1px 2px rgba(0,0,0,.7)",background:"linear-gradient(#8ee07c 0%,#52bb56 46%,#30923a 54%,#256f2a 100%)",border:"1px solid #163f18",boxShadow:"inset 0 1px 0 rgba(255,255,255,.45),inset 0 -3px 0 rgba(0,0,0,.35),0 0 0 3px #11160f,0 0 0 4px #55634d,0 14px 40px rgba(0,0,0,.6),0 0 60px rgba(95,211,95,.25)",transition:"filter .15s,transform .15s"}} className="btn">Play</a>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"8px 18px",marginTop:"14px",font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".16em",textTransform:"uppercase",color:"#8fdc8f",textShadow:"0 1px 6px rgba(0,0,0,.9)"}}>
          <span>Free</span><span style={{color:"#5a6354"}}>·</span><span>No sign-up</span><span style={{color:"#5a6354"}}>·</span><span>No pay-to-win</span><span style={{color:"#5a6354"}}>·</span><span>Nothing to install</span>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:"12px",width:"100%",maxWidth:"720px",marginTop:"20px"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",padding:"16px 10px",background:"rgba(11,13,10,.72)",border:"1px solid #2a2f26",borderRadius:"8px",backdropFilter:"blur(6px)"}}>
          <span style={{font:"400 36px/1 var(--font-russo),Verdana,sans-serif",color:"#fff"}}>7</span>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>hulls</span>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",padding:"16px 10px",background:"rgba(11,13,10,.72)",border:"1px solid #2a2f26",borderRadius:"8px",backdropFilter:"blur(6px)"}}>
          <span style={{font:"400 36px/1 var(--font-russo),Verdana,sans-serif",color:"#fff"}}>9</span>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>turrets</span>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",padding:"16px 10px",background:"rgba(11,13,10,.72)",border:"1px solid #2a2f26",borderRadius:"8px",backdropFilter:"blur(6px)"}}>
          <span style={{font:"400 36px/1 var(--font-russo),Verdana,sans-serif",color:"#fff"}}>101</span>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>paints</span>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",padding:"16px 10px",background:"rgba(11,13,10,.72)",border:"1px solid #2a2f26",borderRadius:"8px",backdropFilter:"blur(6px)"}}>
          <span style={{font:"400 36px/1 var(--font-russo),Verdana,sans-serif",color:"#fff"}}>91</span>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>maps</span>
        </div>
      </div>
    </div>
  </header>

  <section id="why" data-screen-label="Why" style={{padding:"96px 24px",maxWidth:"1160px",margin:"0 auto"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"14px",maxWidth:"760px"}}>
      <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Why it exists</span>
      <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>The pains it fixes</h2>
      <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>The project wasn't born from “let's make a tank game”. It was born from very specific grievances familiar to anyone who played the original.</p>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"16px",marginTop:"44px"}}>
      <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h3 style={{margin:"0",font:"700 17px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Flash died — and took the game with it</h3>
        <p style={{margin:"0",font:"14.5px/1.65 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>In 2020 browsers switched Flash Player off for good, and the classic client had physically nowhere left to run. Here there is nothing to install: the game opens in any modern browser from a plain link — on a home PC, a laptop, a work machine without admin rights.</p>
      </div>
      <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h3 style={{margin:"0",font:"700 17px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>That game no longer exists anywhere</h3>
        <p style={{margin:"0",font:"14.5px/1.65 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>Fifteen years of updates changed the original beyond recognition: different visuals, different physics, different spirit. There is no official way back — the “2010 classic” simply stopped existing as a product. This project carefully recreates it: the same hulls, the same guns, the same tank behaviour on bumps and ramps.</p>
      </div>
      <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h3 style={{margin:"0",font:"700 17px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Community maps are lost for good</h3>
        <p style={{margin:"0",font:"14.5px/1.65 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>Players spent years building their own maps — the original's updates buried them along with the old format. Here the classic collection is preserved (91 maps, summer and winter versions included), the format lives on, and a map editor ships with the game — lost maps can be rebuilt from memory and screenshots, new ones from scratch.</p>
      </div>
      <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h3 style={{margin:"0",font:"700 17px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Money decided more than hands</h3>
        <p style={{margin:"0",font:"14.5px/1.65 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>Supplies were bought with crystals: whoever had the wallet had permanent double damage. Here there is no paid content at all — boosts are infinite and free for everyone, and the balance is finally tuned around equal players, not around a shop.</p>
      </div>
      <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h3 style={{margin:"0",font:"700 17px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Grind before the game</h3>
        <p style={{margin:"0",font:"14.5px/1.65 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>In the original, weeks of farming stood between “I want the Railgun” and “I bought the Railgun”, and team modes unlocked by rank. Here everything — modes, hulls, turrets, paints, maps — is available from the first second. The game starts with the game.</p>
      </div>
      <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h3 style={{margin:"0",font:"700 17px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>The account as an anchor</h3>
        <p style={{margin:"0",font:"14.5px/1.65 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>Registration, e-mail, password, the fear of losing a levelled-up profile if the project shuts down. Here there is nothing to lose and nothing to set up: a call sign — and into battle. A ten-minute lunch-break session is a perfectly valid scenario.</p>
      </div>
      <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h3 style={{margin:"0",font:"700 17px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Nowhere to play with friends</h3>
        <p style={{margin:"0",font:"14.5px/1.65 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>Matchmaking was a lottery, and the classic never offered a room “for our people only”. Here a private password-protected room is created in two clicks — your own server for the evening, like LAN parties back in the day.</p>
      </div>
      <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h3 style={{margin:"0",font:"700 17px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Unfair wins</h3>
        <p style={{margin:"0",font:"14.5px/1.65 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>The outcome of a battle is judged by an impartial referee: damage, speed and hits are verified the same way for everyone, so “clever” clients give no advantage.</p>
      </div>
    </div>
  </section>

  <section data-screen-label="Pillars" style={{padding:"0 24px 96px",maxWidth:"1160px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"88px"}}>

    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"48px",alignItems:"center"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>01 · No accounts</span>
        <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>No registration. At all.</h2>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>There is no account system, and that is a deliberate decision, not an unfinished feature. No e-mails, passwords, confirmations or recoveries. You type a call sign — any name you want to be known by in battle — pick a tank and drive off to fight.</p>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>The game is completely free: free to play in the literal sense, no asterisks. There is no progression ladder either: every mode (including Assault and Capture the Flag), every hull, turret, paint and map is open from the first second.</p>
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"8px 12px",marginTop:"8px",font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".16em",textTransform:"uppercase"}}>
          <span style={{padding:"8px 12px",borderRadius:"4px",border:"1px solid #5fd35f",color:"#8fdc8f",boxShadow:"0 0 10px rgba(95,211,95,.3)"}}>1. Call sign</span><span style={{color:"#5a6354"}}>›</span>
          <span style={{padding:"8px 12px",borderRadius:"4px",color:"#6f776a"}}>2. Tank</span><span style={{color:"#5a6354"}}>›</span>
          <span style={{padding:"8px 12px",borderRadius:"4px",color:"#6f776a"}}>3. Mode</span><span style={{color:"#5a6354"}}>›</span>
          <span style={{padding:"8px 12px",borderRadius:"4px",color:"#6f776a"}}>4. Map</span><span style={{color:"#5a6354"}}>›</span>
          <span style={{padding:"8px 12px",borderRadius:"4px",color:"#6f776a"}}>Battle</span>
        </div>
      </div>
      <img src="assets/shot-8.webp" alt="Tank selection: call sign, hull, turret, paint" style={{width:"100%",height:"auto",display:"block",borderRadius:"8px",border:"1px solid #2a2f26",boxShadow:"0 20px 50px rgba(0,0,0,.6)"}} />
    </div>

    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"48px",alignItems:"center"}}>
      <img src="assets/shot-2.webp" alt="Supplies bar in battle" style={{width:"100%",height:"auto",display:"block",borderRadius:"8px",border:"1px solid #2a2f26",boxShadow:"0 20px 50px rgba(0,0,0,.6)"}} />
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>02 · No pay-to-win</span>
        <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>No paid boosts</h2>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>In the 2010 original, supplies were bought with crystals, and whoever had the thicker wallet fired double damage without pause. Here there is no paid content whatsoever:</p>
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <span style={{position:"relative",flex:"0 0 46px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",background:"linear-gradient(#1d211b,#0e100d)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.06)"}}><img src="assets/supply-1.png" alt="" style={{width:"28px",height:"28px",objectFit:"contain",imageRendering:"auto"}} /><span style={{position:"absolute",right:"4px",bottom:"3px",font:"700 10px/1 Verdana,Geneva,sans-serif",color:"#8fdc8f"}}>1</span></span>
            <p style={{margin:"0",font:"15px/1.5 Verdana,Geneva,sans-serif",color:"#c3c9bb"}}><strong style={{color:"#f2f4ee"}}>Repair kit</strong> — instantly repairs the tank.</p>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <span style={{position:"relative",flex:"0 0 46px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",background:"linear-gradient(#1d211b,#0e100d)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.06)"}}><img src="assets/supply-2.png" alt="" style={{width:"28px",height:"28px",objectFit:"contain",imageRendering:"auto"}} /><span style={{position:"absolute",right:"4px",bottom:"3px",font:"700 10px/1 Verdana,Geneva,sans-serif",color:"#8fdc8f"}}>2</span></span>
            <p style={{margin:"0",font:"15px/1.5 Verdana,Geneva,sans-serif",color:"#c3c9bb"}}><strong style={{color:"#f2f4ee"}}>Double armour</strong> — halves incoming damage for a while.</p>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <span style={{position:"relative",flex:"0 0 46px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",background:"linear-gradient(#1d211b,#0e100d)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.06)"}}><img src="assets/supply-3.png" alt="" style={{width:"28px",height:"28px",objectFit:"contain",imageRendering:"auto"}} /><span style={{position:"absolute",right:"4px",bottom:"3px",font:"700 10px/1 Verdana,Geneva,sans-serif",color:"#8fdc8f"}}>3</span></span>
            <p style={{margin:"0",font:"15px/1.5 Verdana,Geneva,sans-serif",color:"#c3c9bb"}}><strong style={{color:"#f2f4ee"}}>Double damage</strong> — strengthens your shots for a while.</p>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <span style={{position:"relative",flex:"0 0 46px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",background:"linear-gradient(#1d211b,#0e100d)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.06)"}}><img src="assets/supply-4.png" alt="" style={{width:"28px",height:"28px",objectFit:"contain",imageRendering:"auto"}} /><span style={{position:"absolute",right:"4px",bottom:"3px",font:"700 10px/1 Verdana,Geneva,sans-serif",color:"#8fdc8f"}}>4</span></span>
            <p style={{margin:"0",font:"15px/1.5 Verdana,Geneva,sans-serif",color:"#c3c9bb"}}><strong style={{color:"#f2f4ee"}}>Nitro</strong> — a noticeable boost to speed and acceleration.</p>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <span style={{position:"relative",flex:"0 0 46px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",background:"linear-gradient(#1d211b,#0e100d)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.06)"}}><img src="assets/supply-5.png" alt="" style={{width:"28px",height:"28px",objectFit:"contain",imageRendering:"auto"}} /><span style={{position:"absolute",right:"4px",bottom:"3px",font:"700 10px/1 Verdana,Geneva,sans-serif",color:"#8fdc8f"}}>5</span></span>
            <p style={{margin:"0",font:"15px/1.5 Verdana,Geneva,sans-serif",color:"#c3c9bb"}}><strong style={{color:"#f2f4ee"}}>Nuclear energy</strong> — instantly readies the gun and speeds up its reload.</p>
          </div>
        </div>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>All of it is <strong style={{color:"#f2f4ee"}}>infinite and free for every player</strong>. The only limiter is the cooldown after use, identical for everyone. Supplies stopped being merchandise and became tactics: the question is no longer “did you buy it”, but “did you press it in time”.</p>
      </div>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"48px",alignItems:"center"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>03 · Balance</span>
        <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>Balance that makes skill absolute</h2>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>Since everyone is equal in equipment, the only way to win is by playing. The balance is tuned precisely for that:</p>
        <ul style={{margin:"0",padding:"0 0 0 20px",display:"flex",flexDirection:"column",gap:"8px",font:"15px/1.55 Verdana,Geneva,sans-serif",color:"#c3c9bb"}}>
          <li>Every gun's damage has a small, honest spread and falls off with distance — close combat is riskier but rewarded.</li>
          <li>Double damage is deliberately weaker than in the original: even boosted, a Railgun won't take down a medium tank in one shot. A kill is always a series of decisions, not one lucky button.</li>
          <li>Nitro is stronger and available to all — speed became a positioning skill, not a privilege.</li>
          <li>After respawn the tank is invulnerable and blinks for a few seconds — spawn-camping is impossible, and free spawn points are chosen.</li>
          <li>The outcome of a battle is judged by an impartial referee, the same for everyone — no client-side tricks give an advantage.</li>
          <li>Bots aim “like humans”: with aiming error, reaction delay and turret traverse — they can be outplayed by manoeuvre, like a live opponent.</li>
        </ul>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#f2f4ee",textWrap:"pretty"}}>The result: the top of the scoreboard goes to whoever drives better, shoots straighter and picks the moment smarter — not to whoever paid longer.</p>
      </div>
      <img src="assets/art-7.webp" alt="Two tanks balanced on a seesaw" style={{width:"100%",height:"auto",display:"block",borderRadius:"8px",border:"1px solid #2a2f26",boxShadow:"0 20px 50px rgba(0,0,0,.6)"}} />
    </div>
  </section>

  <section id="modes" data-screen-label="Modes" style={{position:"relative",padding:"96px 24px",background:"url(assets/art-6.webp) center/cover no-repeat"}}>
    <div style={{position:"absolute",inset:"0",background:"linear-gradient(180deg,#0b0d0a 0%,rgba(11,13,10,.88) 25%,rgba(11,13,10,.88) 75%,#0b0d0a 100%)"}}></div>
    <div style={{position:"relative",maxWidth:"1160px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"44px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",maxWidth:"760px"}}>
        <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Game modes</span>
        <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>All modes open from the first minute</h2>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>In the original you had to grow into team modes by rank. There is no ladder here: <strong style={{color:"#f2f4ee"}}>Assault and Capture the Flag are available immediately</strong>, like everything else — any mode, any map, any tank from the first launch.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:"12px"}}>
        <div style={{background:"rgba(14,16,13,.9)",border:"1px solid #2a2f26",borderRadius:"8px",padding:"22px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 16px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Deathmatch</h3>
          <p style={{margin:"0",font:"14px/1.55 Verdana,Geneva,sans-serif",color:"#aab09f"}}>Every tank for itself. The classic meat grinder.</p>
        </div>
        <div style={{background:"rgba(14,16,13,.9)",border:"1px solid #2a2f26",borderRadius:"8px",padding:"22px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 16px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Team Deathmatch</h3>
          <p style={{margin:"0",font:"14px/1.55 Verdana,Geneva,sans-serif",color:"#aab09f"}}><span style={{color:"#ff6b4a",fontWeight:"700"}}>Red</span> versus <span style={{color:"#4a9eff",fontWeight:"700"}}>blue</span>, team score.</p>
        </div>
        <div style={{background:"rgba(14,16,13,.9)",border:"1px solid #5fd35f",borderRadius:"8px",padding:"22px",display:"flex",flexDirection:"column",gap:"8px",boxShadow:"0 0 18px rgba(95,211,95,.3)"}}>
          <h3 style={{margin:"0",font:"700 16px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Capture the Flag</h3>
          <p style={{margin:"0",font:"14px/1.55 Verdana,Geneva,sans-serif",color:"#aab09f"}}>Take the enemy flag to your base. Available immediately, no conditions.</p>
        </div>
        <div style={{background:"rgba(14,16,13,.9)",border:"1px solid #5fd35f",borderRadius:"8px",padding:"22px",display:"flex",flexDirection:"column",gap:"8px",boxShadow:"0 0 18px rgba(95,211,95,.3)"}}>
          <h3 style={{margin:"0",font:"700 16px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Assault</h3>
          <p style={{margin:"0",font:"14px/1.55 Verdana,Geneva,sans-serif",color:"#aab09f"}}>The mirror task: carry YOUR flag to the enemy base. Also open from the start.</p>
        </div>
        <div style={{background:"rgba(14,16,13,.9)",border:"1px solid #2a2f26",borderRadius:"8px",padding:"22px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 16px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Explore Map</h3>
          <p style={{margin:"0",font:"14px/1.55 Verdana,Geneva,sans-serif",color:"#aab09f"}}>No fighting, no score: just drive around and look at any map. A mode for walks, screenshots and learning the cover.</p>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"16px"}}>
        <div style={{background:"rgba(14,16,13,.9)",border:"1px solid #2a2f26",borderRadius:"8px",overflow:"hidden",display:"flex",flexDirection:"column"}}>
          <img src="assets/shot-9.webp" alt="Deathmatch: play solo or multiplayer" style={{width:"100%",height:"auto",display:"block",borderBottom:"1px solid #2a2f26"}} />
          <div style={{padding:"24px",display:"flex",flexDirection:"column",gap:"12px"}}>
            <h3 style={{margin:"0",font:"700 18px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Play alone or with people</h3>
            <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}><strong style={{color:"#e4e8de"}}>Solo vs bots</strong> — an offline battle against computer tanks; their number is adjustable, down to none at all. Perfect for learning a gun or warming up.</p>
            <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}><strong style={{color:"#e4e8de"}}>Multiplayer</strong> — a room for live players, never any bots. Team modes are always about live people.</p>
          </div>
        </div>
        <div style={{background:"rgba(14,16,13,.9)",border:"1px solid #2a2f26",borderRadius:"8px",overflow:"hidden",display:"flex",flexDirection:"column"}}>
          <img src="assets/shot-10.webp" alt="Open battles list" style={{width:"100%",height:"auto",display:"block",borderBottom:"1px solid #2a2f26"}} />
          <div style={{padding:"24px",display:"flex",flexDirection:"column",gap:"12px"}}>
            <h3 style={{margin:"0",font:"700 18px/1.3 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Rooms: public and private</h3>
            <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}><strong style={{color:"#e4e8de"}}>Open room</strong> — appears in the shared battle list; anyone sees it, picks a side and joins. That's how you meet random opponents.</p>
            <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}><strong style={{color:"#e4e8de"}}>Private room with a password</strong> — marked with a lock in the list; only those you gave the password to can enter. The password never shows anywhere — not in the link, not in the list. If the connection drops or the page reloads, you return to your own tank without losing the score.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="tanks" data-screen-label="Tanks" style={{padding:"96px 24px",maxWidth:"1160px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"96px"}}>

    <div style={{display:"flex",flexDirection:"column",gap:"40px"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"48px",alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
          <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Hulls</span>
          <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>Seven hulls, seven characters</h2>
          <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>The classic line-up, from wasp to mammoth. Every hull is open from the first second — pick the one that matches how you drive, not how long you've farmed.</p>
        </div>
        <img src="assets/art-5.webp" alt="Tank flying off a ramp" style={{width:"100%",height:"auto",display:"block",borderRadius:"8px",border:"1px solid #2a2f26",boxShadow:"0 20px 50px rgba(0,0,0,.6)"}} />
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,150px),1fr))",gap:"12px"}}>
        <div style={{background:"#0e100d",border:"1px solid #2a2f26",borderRadius:"6px",padding:"18px 16px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 17px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Wasp</h3>
          <p style={{margin:"0",font:"13px/1.5 Verdana,Geneva,sans-serif",color:"#aab09f"}}>The lightest and fastest; a glass feather that lives by manoeuvre.</p>
        </div>
        <div style={{background:"#0e100d",border:"1px solid #2a2f26",borderRadius:"6px",padding:"18px 16px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 17px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Hornet</h3>
          <p style={{margin:"0",font:"13px/1.5 Verdana,Geneva,sans-serif",color:"#aab09f"}}>A bit sturdier and more solid than the Wasp, still very nimble.</p>
        </div>
        <div style={{background:"#0e100d",border:"1px solid #5fd35f",borderRadius:"6px",padding:"18px 16px",display:"flex",flexDirection:"column",gap:"8px",boxShadow:"0 0 14px rgba(95,211,95,.3)"}}>
          <h3 style={{margin:"0",font:"700 17px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Hunter</h3>
          <p style={{margin:"0",font:"13px/1.5 Verdana,Geneva,sans-serif",color:"#aab09f"}}>The golden mean: speed, armour and weight in balance. The textbook “first tank”.</p>
        </div>
        <div style={{background:"#0e100d",border:"1px solid #2a2f26",borderRadius:"6px",padding:"18px 16px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 17px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Viking</h3>
          <p style={{margin:"0",font:"13px/1.5 Verdana,Geneva,sans-serif",color:"#aab09f"}}>Wide, stable all-rounder; hard to flip, pleasant on rough ground.</p>
        </div>
        <div style={{background:"#0e100d",border:"1px solid #2a2f26",borderRadius:"6px",padding:"18px 16px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 17px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Dictator</h3>
          <p style={{margin:"0",font:"13px/1.5 Verdana,Geneva,sans-serif",color:"#aab09f"}}>Tall hull with the turret mounted high: sees over cover, but is seen too.</p>
        </div>
        <div style={{background:"#0e100d",border:"1px solid #2a2f26",borderRadius:"6px",padding:"18px 16px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 17px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Titan</h3>
          <p style={{margin:"0",font:"13px/1.5 Verdana,Geneva,sans-serif",color:"#aab09f"}}>Heavy and unhurried, soaks up a lot of damage.</p>
        </div>
        <div style={{background:"#0e100d",border:"1px solid #2a2f26",borderRadius:"6px",padding:"18px 16px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <h3 style={{margin:"0",font:"700 17px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Mammoth</h3>
          <p style={{margin:"0",font:"13px/1.5 Verdana,Geneva,sans-serif",color:"#aab09f"}}>The slowest and the toughest; a fortress on tracks.</p>
        </div>
      </div>
    </div>

    <div style={{display:"flex",flexDirection:"column",gap:"40px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",maxWidth:"760px"}}>
        <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Turrets</span>
        <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>Nine guns, nine styles of fighting</h2>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>Nine guns are nine different answers to the question “how exactly does the damage arrive”. The difference between them isn't in numbers but in the very mechanics of the shot.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"16px"}}>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Instant hit</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Smoky</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>The shot lands <strong style={{color:"#e4e8de"}}>instantly</strong>, exactly where the barrel points the moment you press. No projectile flight: press — hit (or miss). Medium damage, medium reload, works at any range — the benchmark the rest are measured against.</p>
        </div>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Bouncing projectile</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Ricochet</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>The opposite: a plasma bolt <strong style={{color:"#e4e8de"}}>really flies</strong> at finite speed, and you need to lead the target. In return it <strong style={{color:"#e4e8de"}}>bounces off walls</strong> — many times in a row. The only gun that shoots around corners: learn the map's geometry and you reach the enemy where he thought he was safe, without ever showing yourself.</p>
        </div>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Charged piercing beam</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Railgun</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>Instant like Smoky, but preceded by a <strong style={{color:"#e4e8de"}}>long charge</strong> with a growing glow on the muzzle that everyone sees. The beam <strong style={{color:"#e4e8de"}}>pierces everyone lined up on its path</strong>: each next target takes less, but one shot “down the queue” drops two or three at once. The biggest single hit in the game, the longest price for a miss, total helplessness while charging. A gun of cold calculation.</p>
        </div>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Rapid fire</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Twins</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>A fast-firing double-barrel spitting slow plasma alternately from two barrels; small damage per shot, but the stream is almost continuous — a gun of close-range pressure.</p>
        </div>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Area explosion</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Thunder</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>A high-explosive: the shell flies and <strong style={{color:"#e4e8de"}}>explodes over an area</strong>, hitting everyone near the impact point; a direct hit isn't required — you can aim at the wall by their feet — but standing next to your own blast hurts too.</p>
        </div>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Stream · burn</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Firebird</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>Not a shot but a <strong style={{color:"#e4e8de"}}>continuous stream</strong> while you hold the trigger: short range, an energy bar that drains. It sets the enemy on fire — he <strong style={{color:"#e4e8de"}}>keeps burning and taking damage</strong> after escaping the stream, and while burning, any damage hurts him more. “Ignite and finish”.</p>
        </div>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Stream · control</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Freeze</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>Firebird's twin in mechanics, its opposite in effect: a frozen enemy <strong style={{color:"#e4e8de"}}>reloads noticeably slower</strong>. Freeze hits softer, but breaks the enemy's tempo: his Railgun, his Thunder, his Smoky — all delayed. A gun of control, not damage.</p>
        </div>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Stream · drain &amp; heal</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Isida</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}>The beam locks onto one target: an enemy gets drained (and part of what's drained comes back to you as health), an ally gets healed. In team battles Isida turns a player into a front-line medic.</p>
        </div>
        <div style={{background:"#121510",border:"1px solid #2a2f26",borderRadius:"8px",padding:"26px",display:"flex",flexDirection:"column",gap:"10px"}}>
          <span style={{font:"700 11px/1 Verdana,Geneva,sans-serif",letterSpacing:".18em",textTransform:"uppercase",color:"#8fdc8f"}}>Sniper</span>
          <h3 style={{margin:"0",font:"700 20px/1.2 Verdana,Geneva,sans-serif",color:"#f2f4ee"}}>Shaft</h3>
          <p style={{margin:"0",font:"14.5px/1.6 Verdana,Geneva,sans-serif",color:"#aab09f",textWrap:"pretty"}}><strong style={{color:"#e4e8de"}}>Hip fire</strong> — a quick jab without aiming, so you're not helpless in a brawl. <strong style={{color:"#e4e8de"}}>Scoped</strong> — hold aim: the camera drops to the barrel and zooms like optics, the tank stands still, and the longer you hold, the harder the shot charges — at full charge it's Railgun-level damage at the longest range in the game. While the sniper aims, <strong style={{color:"#e4e8de"}}>everyone sees his laser</strong>. A duel of attention.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="maps" data-screen-label="Maps" style={{padding:"0 0 96px",display:"flex",flexDirection:"column",gap:"40px"}}>
    <div style={{padding:"0 24px",maxWidth:"1160px",margin:"0 auto",width:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",gap:"14px"}}>
      <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Maps</span>
      <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>91 battlefields</h2>
      <p style={{margin:"0",maxWidth:"760px",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>Fifty-three summer maps, and thirty-eight of them have a winter version — the same walls and ramps, but in snow. Any of them can be opened in Explore mode and driven around without a single shot.</p>
    </div>
    <div style={{display:"flex",gap:"16px",overflowX:"auto",scrollSnapType:"x mandatory",padding:"4px max(24px,calc((100vw - 1160px)/2)) 20px",scrollbarWidth:"thin",scrollbarColor:"#3a4036 transparent"}}>
      <img src="assets/shot-1.webp" alt="Beach map" style={{flex:"0 0 min(78vw,640px)",aspectRatio:"16/9",objectFit:"cover",borderRadius:"8px",border:"1px solid #2a2f26",scrollSnapAlign:"start"}} />
      <img src="assets/shot-3.webp" alt="Deck 9 in space" style={{flex:"0 0 min(78vw,640px)",aspectRatio:"16/9",objectFit:"cover",borderRadius:"8px",border:"1px solid #2a2f26",scrollSnapAlign:"start"}} />
      <img src="assets/shot-4.webp" alt="City map with ramps" style={{flex:"0 0 min(78vw,640px)",aspectRatio:"16/9",objectFit:"cover",borderRadius:"8px",border:"1px solid #2a2f26",scrollSnapAlign:"start"}} />
      <img src="assets/shot-5.webp" alt="Red versus blue on the hills" style={{flex:"0 0 min(78vw,640px)",aspectRatio:"16/9",objectFit:"cover",borderRadius:"8px",border:"1px solid #2a2f26",scrollSnapAlign:"start"}} />
      <img src="assets/shot-11.webp" alt="Map selection" style={{flex:"0 0 min(78vw,640px)",aspectRatio:"16/9",objectFit:"cover",borderRadius:"8px",border:"1px solid #2a2f26",scrollSnapAlign:"start"}} />
      <img src="assets/shot-6.webp" alt="Battle over scoreboard" style={{flex:"0 0 min(78vw,640px)",aspectRatio:"16/9",objectFit:"cover",borderRadius:"8px",border:"1px solid #2a2f26",scrollSnapAlign:"start"}} />
    </div>
    
  </section>

  <section data-screen-label="Paints" style={{padding:"0 24px 96px",maxWidth:"1160px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"28px"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"14px",maxWidth:"760px"}}>
      <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Paints</span>
      <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>101 paints</h2>
      <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>Paint is pure cosmetics and self-expression: it does not affect armour. From plain colours to signature skins — all free, all unlocked. In team battles a team can still be told apart by the classic <span style={{color:"#ff6b4a",fontWeight:"700"}}>red</span> and <span style={{color:"#4a9eff",fontWeight:"700"}}>blue</span>.</p>
    </div>
    <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
      <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>red</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>blue</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>green</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>black</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>white</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>orange</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>acid</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>amilia</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>anubis</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>apple</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>arab</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>barkhan</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>besthelper</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>blink</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>blizzard</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>blueray</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>carbon</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>champion</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>clay</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>creator</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>digital</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>dirt</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>dragon</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>drug</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>electra</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>euro2012</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>flame</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>flash</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>flora</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",background:"#0e100d",border:"1px solid #2a2f26",font:"12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#c3c9bb"}}>flow</span>
        <span style={{padding:"7px 11px",borderRadius:"4px",border:"1px solid #5fd35f",font:"700 12.5px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#8fdc8f"}}>+71 more</span>
    </div>
  </section>

  <section id="controls" data-screen-label="Controls" style={{padding:"0 24px 96px",maxWidth:"1160px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"48px",alignItems:"start"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
      <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Controls</span>
      <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>Keyboard only</h2>
      <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>As in the original, no mouse is needed. The camera always stays behind the tank.</p>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"12px 20px",alignItems:"center",font:"15px/1.4 Verdana,Geneva,sans-serif",color:"#c3c9bb"}}>
      <div style={{display:"flex",gap:"6px"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>WASD</span><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>↑↓←→</span></div><span>Drive</span>
      <div style={{display:"flex",gap:"6px"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>Z</span><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>X</span></div><span>Turn turret</span>
      <div style={{display:"flex",gap:"6px"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>C</span></div><span>Centre turret</span>
      <div style={{display:"flex",gap:"6px"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 24px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>Space</span></div><span>Fire</span>
      <div style={{display:"flex",gap:"6px"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>Q</span><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>E</span></div><span>Tilt camera</span>
      <div style={{display:"flex",gap:"6px"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>1–5</span></div><span>Supplies</span>
      <div style={{display:"flex",gap:"6px"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>0</span></div><span>Self-destruct (hold)</span>
      <div style={{display:"flex",gap:"6px"}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"44px",height:"44px",padding:"0 12px",borderRadius:"6px",background:"linear-gradient(#2a2e27,#1a1d18)",border:"1px solid #3a4036",boxShadow:"inset 0 1px 0 rgba(255,255,255,.08),0 3px 0 #0a0c09",font:"700 14px/1 'DejaVu Sans Mono',Menlo,Consolas,monospace",color:"#e8ebe3"}}>Tab</span></div><span>Scoreboard</span>
    </div>
  </section>

  <section id="mobile" style={{padding:"0 24px 96px",maxWidth:"1160px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"40px"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"48px",alignItems:"center"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Mobile</span>
        <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>On your phone — installed as a PWA</h2>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>The mobile version installs straight from the browser as a Progressive Web App: open the link, tap “Add to Home Screen”, and SkillTanki gets its own icon and runs full screen like a regular app.</p>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}><strong style={{color:"#f2f4ee"}}>No Google Play.</strong> No store account, no regional restrictions — the game does not depend on whether the store is available in your country.</p>
        <ul style={{margin:"0",padding:"0 0 0 20px",display:"flex",flexDirection:"column",gap:"8px",font:"15px/1.55 Verdana,Geneva,sans-serif",color:"#c3c9bb"}}>
          <li>Touch controls: a drive joystick, Fire, turret buttons and supplies on screen.</li>
          <li>The same garage — 7 hulls, 9 turrets, paints — and the same modes: DM, TDM, CTF, Assault.</li>
          <li>Solo against bots offline, or multiplayer rooms with an optional password.</li>
          <li>A graphics-quality switch keeps it smooth on older phones.</li>
        </ul>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"14px",marginTop:"12px"}}>
          <a href="https://mobile.skilltanki.workers.dev/" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",height:"64px",padding:"0 48px",borderRadius:"7px",font:"700 20px/1 Verdana,Geneva,sans-serif",letterSpacing:".12em",textTransform:"uppercase",color:"#fff",textDecoration:"none",textShadow:"0 1px 2px rgba(0,0,0,.7)",background:"linear-gradient(#8ee07c 0%,#52bb56 46%,#30923a 54%,#256f2a 100%)",border:"1px solid #163f18",boxShadow:"inset 0 1px 0 rgba(255,255,255,.45),inset 0 -3px 0 rgba(0,0,0,.35),0 0 0 3px #11160f,0 0 0 4px #55634d,0 14px 40px rgba(0,0,0,.6),0 0 60px rgba(95,211,95,.25)",transition:"filter .15s,transform .15s"}} className="btn">Install Now</a>
          <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".16em",textTransform:"uppercase",color:"#8fdc8f"}}>Open on your phone · Add to Home Screen</span>
        </div>
      </div>
      <img src="assets/mob-14.webp" alt="Mobile battle: joystick, Fire button and supplies on a touch screen" style={{width:"100%",height:"auto",display:"block",borderRadius:"8px",border:"1px solid #2a2f26",boxShadow:"0 20px 50px rgba(0,0,0,.6)"}} />
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"16px"}}>
      <img src="assets/mob-19.webp" alt="Mobile garage: hulls and turrets" style={{width:"100%",height:"auto",display:"block",borderRadius:"6px",border:"1px solid #2a2f26"}} />
      <img src="assets/mob-20.webp" alt="Mobile: new room with mode, bots and password" style={{width:"100%",height:"auto",display:"block",borderRadius:"6px",border:"1px solid #2a2f26"}} />
      <img src="assets/mob-13.webp" alt="Mobile: map selection" style={{width:"100%",height:"auto",display:"block",borderRadius:"6px",border:"1px solid #2a2f26"}} />
    </div>
  </section>

  <section id="gamepad" style={{padding:"0 24px 96px",maxWidth:"1160px",margin:"0 auto"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"48px",alignItems:"center"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f"}}>Gamepad</span>
        <h2 style={{margin:"0",font:"400 clamp(28px,4vw,42px)/1.1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",textWrap:"balance"}}>Play with a controller — or on a Steam Deck</h2>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>The mobile PWA supports gamepads as a third way to play, next to touch and keyboard. Any controller with a standard layout works: DualShock / DualSense, Xbox, Switch Pro, most Bluetooth pads for phones — and the Steam Deck's built-in controls. Connect over Bluetooth or USB; nothing to configure, the game takes the first connected pad.</p>
        <p style={{margin:"0",font:"16px/1.65 Verdana,Geneva,sans-serif",color:"#c3c9bb",textWrap:"pretty"}}>All three inputs work at the same time. Touch the pad and the on-screen buttons fade away; touch the screen and they come back. In menus the pad behaves like a keyboard: D-pad and left stick move the focus, ✕ confirms, ○ cancels.</p>
      </div>
      <img src="assets/gamepad.webp" alt="Controller layout: left stick, D-pad, face buttons, right stick, shoulder buttons" style={{width:"100%",height:"auto",display:"block",borderRadius:"8px",border:"1px solid #2a2f26",boxShadow:"0 20px 50px rgba(0,0,0,.6)"}} />
    </div>
</section>

  <section id="play" data-screen-label="Final CTA" style={{position:"relative",padding:"140px 24px",background:"url(assets/art-8.webp) center/cover no-repeat"}}>
    <div style={{position:"absolute",inset:"0",background:"linear-gradient(180deg,#0b0d0a 0%,rgba(11,13,10,.6) 30%,rgba(11,13,10,.75) 100%)"}}></div>
    <div style={{position:"relative",maxWidth:"820px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"28px"}}>
      <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".2em",textTransform:"uppercase",color:"#8fdc8f",textShadow:"0 1px 6px rgba(0,0,0,.9)"}}>In one line</span>
      <h2 style={{margin:"0",font:"400 clamp(26px,3.6vw,40px)/1.2 var(--font-russo),Verdana,sans-serif",color:"#fff",textShadow:"0 3px 18px rgba(0,0,0,.8)",textWrap:"balance"}}>2010-era tanks, the way you remember them: no registration, no paid boosts, no advantages for money — 7 hulls, 9 turrets, 101 paints, 91 maps, battles with friends by password or with strangers from the open list, and a balance where only skill decides.</h2>
      <a href="https://mobile.skilltanki.workers.dev/" target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",height:"72px",padding:"0 72px",borderRadius:"7px",font:"700 26px/1 Verdana,Geneva,sans-serif",letterSpacing:".14em",textTransform:"uppercase",color:"#fff",textDecoration:"none",textShadow:"0 1px 2px rgba(0,0,0,.7)",background:"linear-gradient(#8ee07c 0%,#52bb56 46%,#30923a 54%,#256f2a 100%)",border:"1px solid #163f18",boxShadow:"inset 0 1px 0 rgba(255,255,255,.45),inset 0 -3px 0 rgba(0,0,0,.35),0 0 0 3px #11160f,0 0 0 4px #55634d,0 14px 40px rgba(0,0,0,.6),0 0 60px rgba(95,211,95,.25)",transition:"filter .15s,transform .15s"}} className="btn">Play</a>
      <span style={{font:"700 12px/1 Verdana,Geneva,sans-serif",letterSpacing:".16em",textTransform:"uppercase",color:"#e4e8de",textShadow:"0 1px 6px rgba(0,0,0,.9)"}}>Opens in your browser</span>
    </div>
  </section>

  <footer style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px",padding:"28px 24px",borderTop:"1px solid #1f241d",maxWidth:"1160px",margin:"0 auto",boxSizing:"border-box"}}>
    <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
      <img src="assets/icon.webp" alt="" style={{width:"32px",height:"32px",borderRadius:"6px",border:"1px solid #3a4036",objectFit:"cover"}} />
      <span style={{font:"400 15px/1 var(--font-russo),Verdana,sans-serif",color:"#f2f4ee",letterSpacing:".04em"}}>SKILLTANKI</span>
    </div>
    <span style={{font:"13px/1.4 Verdana,Geneva,sans-serif",color:"#6f776a"}}>A browser tank arcade in the spirit of the 2010 classic. Free. No accounts.</span>
  </footer>
</div>
  );
}
