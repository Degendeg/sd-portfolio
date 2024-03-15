const RndFact = ({ itemsRef, isDark }) => {
  return (
    <div className={`container third ${isDark ? 'third-bg-dark' : 'third-bg-light'}`}>
      <div className="item">
        <div className="img img-first"></div>
        <div className="card">
          <h3>Work in progress 🚧</h3>
          <p>Löksås ipsum flera om färdväg där som ännu åker gör, sjö sista miljoner hans jäst fram från vidsträckt denna, precis stora se det tid äng olika räv. Stora äng hela mjuka strand ser bland mot, lax och dimmhöljd på kan denna precis, sista vi det bland så tiden.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="item" ref={itemsRef}>
        <div className="img img-second"></div>
        <div className="card">
          <h3>Work in progress 🚧</h3>
          <p>Vid sitt tidigare annan bland äng vemod plats dimma där rot, genom annat år träutensilierna ta lax se där blivit, kan trevnadens blev enligt därmed själv vid genom kanske. Lax mot dimmhöljd upprätthållande ordningens tid annan sorgliga omfångsrik icke groda.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="item">
        <div className="img img-third"></div>
        <div className="card">
          <h3>Work in progress 🚧</h3>
          <p>Se bäckasiner därmed vid ingalunda groda om, se kom strand på själv både, sjö helt sitt är björnbär. Nu kan annat stig om hans kanske söka så plats hwila, plats denna strand vi hav har del av mjuka hans, blivit vi vidsträckt mjuka helt samma bra sig enligt.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  )
}
export default RndFact