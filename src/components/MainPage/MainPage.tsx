import { Route, Switch } from "react-router-dom";
import "./MainPage.css";

export const MainPage = () => (
  <section className="main-content">
    <Switch>
      <Route exact path="/olimpia-front/">
        <div className="facebook-desktop">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fksolimpiakaty&tabs=timeline&width=500&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="Olimpia Kąty Facebook Feed"
            width="500"
            height="1500"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="facebook-mobile">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fksolimpiakaty&tabs=timeline&width=300&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="Olimpia Kąty Facebook Feed"
            width="300"
            height="800"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </Route>
      <Route path="/olimpia-front/table">
        <p>Tabela tymczasowo niedostępna</p>
      </Route>
      <Route path="/olimpia-front/calendar">
        <p>Terminarz tymczasowo niedostępny</p>
      </Route>
      <Route path="/olimpia-front/team">
        <p>Kadra tymczasowo niedostępna</p>
      </Route>
      <Route path="/olimpia-front/gallery">
        <p>Galeria tymczasowo niedostępna</p>
      </Route>
    </Switch>
  </section>
);
