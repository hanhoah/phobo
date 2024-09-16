import React from "react";
import { useLocale } from "next-intl";

// src/app/de/impressum/page.tsx
const ImpressumPage = () => {
  const locale = useLocale();
  if (locale == "de") {
    return (
      <div className="w-1/2">
        <h1>Impressum</h1>
        <p>
          WJH Werkzeugtechnik, Am Meerkamp 19A, 40667 Meerbusch
          <br />
          info@wjh-wt.de
          <br />
          Tel.: +49 (0) 213 2581 2130
          <br />
          www.wjh-wt.de
          <br />
          Vertretungsberechtigter Geschäftsführer: Junhua Wei
          <br />
          <br />
          Handelsregister: HRB 90080
          <br />
          Registergericht: Amtsgericht Düsseldorf
          <br />
          USt-IdNr.: DE343906954
        </p>
        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
          oben im Impressum.
        </p>
        <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <p>Quelle: e-recht24.de</p>
      </div>
    );
  } else {
    return (
      <div className="w-1/2">
        <h1>Imprint</h1>
        <p>
          WJH Werkzeugtechnik, Am Meerkamp 19A, 40667 Meerbusch
          <br />
          info@wjh-wt.de
          <br />
          Tel.: +49 (0) 213 2581 2130
          <br />
          www.wjh-wt.de
          <br />
          Managing director authorized to represent the company: Junhua Wei
          <br />
          <br />
          Commercial Register: HRB 90080
          <br />
          Register Court: Amtsgericht Düsseldorf
          <br />
          VAT Number: DE343906954
        </p>
        <h2>EU dispute resolution</h2>
        <p>
          The European Commission provides a platform for Online Dispute
          Resolution (OS) platform: https://ec.europa.eu/consumers/odr. You can
          find our e-mail address above in the legal notice.
        </p>
        <h2>Consumer dispute resolution/Universal arbitration board</h2>
        <p>
          We are not willing or obliged to participate in dispute resolution
          proceedings before a consumer arbitration board.
        </p>
        <h2>Liability for content</h2>
        <p>
          As a service provider, we are liable for our own content in accordance
          with Section 7 (1) TMG on these pages according to the general laws.
          According to §§ 8 to 10 TMG, however, we as a service provider are not
          obliged to monitor transmitted or stored third-party information or to
          investigate or to investigate circumstances that indicate illegal
          activity. activity. Obligations to remove or block the use of use of
          information in accordance with the general laws remain remain
          unaffected by this. However, liability in this respect is only
          possible from the time of knowledge of a concrete infringement. Upon
          we become aware of such legal violations, we will remove this content
          immediately. remove such content immediately.
        </p>
        <h2>Liability for links</h2>
        <p>
          Our website contains links to external websites of third parties over
          whose contents we have no influence. We can therefore for these assume
          any liability for this third-party content. For the contents of the
          linked pages is always the respective provider or operator of the
          responsible for the content of the linked pages. The linked pages were
          checked at the time of checked for possible legal violations at the
          time of linking. Illegal contents were not recognizable at the time of
          linking. A permanent monitoring of the content of the linked pages is
          not reasonable without concrete evidence of an infringement. If we
          become aware of legal violations, we will remove such links
          immediately. remove such links immediately.
        </p>
        <h2>Copyright</h2>
        <p>
          The content and works created by the site operators on these pages are
          subject to German copyright law. The reproduction, processing,
          distribution and any kind of exploitation outside the limits of
          copyright law require the written consent of the respective author or
          of the respective author or creator. Downloads and copies of this site
          are only permitted for private, non-commercial use. Insofar as the
          content on this site was not created by the operator the copyrights of
          third parties are respected. In particular third-party content is
          marked as such. Should you nevertheless nevertheless become aware of a
          copyright infringement, please inform us corresponding notification.
          As soon as we become aware of legal violations we will remove such
          content immediately.
        </p>
        <p>Source: e-recht24.de</p>
      </div>
    );
  }
};

export default ImpressumPage;
