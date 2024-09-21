import React from "react";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// src/app/de/impressum/page.tsx
const PrivacyPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  if (locale == "de") {
    return (
      <div className="w-full lg:w-1/2">
        <h2>Datenschutzerklärung</h2>
        <p>
          Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer
          Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie
          ausführlich über den Umgang mit Ihren Daten. Speicherung von
          Zugriffsdaten in Server-Logfiles Sie können unsere Webseiten besuchen,
          ohne Angaben zu Ihrer Person zu machen. Wir speichern lediglich
          Zugriffsdaten in sogenannten Server-Logfiles, wie z.B. den Namen der
          angeforderten Datei, Datum und Uhrzeit des Abrufs, übertragene
          Datenmenge und den anfragenden Provider. Diese Daten werden
          ausschließlich zur Sicherstellung eines störungsfreien Betriebs der
          Seite und zur Verbesserung unseres Angebots ausgewertet und erlauben
          uns keinen Rückschluss auf Ihre Person. Datenerhebung und -Verwendung
          zur Vertragsabwicklung und bei Eröffnung eines Kundenkontos Wir
          erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer
          Bestellung, bei einer Kontaktaufnahme mit uns (z.B. per
          Kontaktformular oder E-Mail) oder bei Eröffnung eines Kundenkontos
          freiwillig mitteilen. Welche Daten erhoben werden, ist aus den
          jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von ihnen
          mitgeteilten Daten zur Vertragsabwicklung und Bearbeitung Ihrer
          Anfragen. Nach vollständiger Abwicklung des Vertrages oder Löschung
          Ihres Kundenkontos werden Ihre Daten für die weitere Verwendung
          gesperrt und nach Ablauf der steuer- und handelsrechtlichen
          Aufbewahrungsfristen gelöscht, sofern Sie nicht ausdrücklich in eine
          weitere Nutzung Ihrer Daten eingewilligt haben oder wir uns eine
          darüber hinausgehende Datenverwendung vorbehalten, die gesetzlich
          erlaubt ist und über die wir Sie nachstehend informieren. Die Löschung
          Ihres Kundenkontos ist jederzeit möglich und kann entweder durch eine
          Nachricht an die unten beschriebene Kontaktmöglichkeit oder über eine
          dafür vorgesehene Funktion im Kundenkonto erfolgen.
        </p>
        <h2>Datenweitergabe zur Vertragserfüllung</h2>
        <p>
          Zur Vertragserfüllung geben wir Ihre Daten an das mit der Lieferung
          beauftragten Versandunternehmen weiter, soweit dies zur Lieferung
          bestellter Waren erforderlich ist. Zur Abwicklung von Zahlungen geben
          wir die hierfür erforderlichen Zahlungsdaten an das mit der Zahlung
          beauftragte Kreditinstitut und ggf. von uns beauftragte
          Zahlungsdienstleister weiter bzw. an den von Ihnen im Bestellprozess
          ausgewählten Zahlungsdienst.
        </p>

        <h2>Verwendung von Cookies</h2>
        <p>
          Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung
          bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen
          Seiten sogenannte Cookies. Hierbei handelt es sich um kleine
          Textdateien, die auf Ihrem Endgerät gespeichert werden. Einige der von
          uns verwendeten Cookies werden nach Ende der Browser-Sitzung, also
          nach Schließen Ihres Browsers, wieder gelöscht (sog.
          Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endgerät und
          ermöglichen uns, Ihren Browser beim nächsten Besuch wiederzuerkennen
          (persistente Cookies). Sie können Ihren Browser so einstellen, dass
          Sie über das Setzen von Cookies informiert werden und einzeln über
          deren Annahme entscheiden oder die Annahme von Cookies für bestimmte
          Fälle oder generell ausschließen. Bei der Nichtannahme von Cookies
          kann die Funktionalität unserer Website eingeschränkt sein.
        </p>
        <h2>Auskunftsrecht und Kontaktmöglichkeit</h2>
        <p>
          Sie haben ein Recht auf unentgeltliche Auskunft über die bei uns zu
          Ihrer Person gespeicherten Daten sowie ggf. ein Recht auf
          Berichtigung, Sperrung oder Löschung dieser Daten. Bei Fragen zur
          Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei
          Auskünften, Berichtigung, Sperrung oder Löschung von Daten sowie
          Widerruf erteilter Einwilligungen oder Widerspruch gegen eine
          bestimmte Datenverwendung wenden Sie sich bitte direkt an uns über die
          Kontaktdaten in unserem Impressum.
        </p>
      </div>
    );
  } else {
    return (
      <div className="w-full lg:w-1/2">
        <h1>Privacy policy</h1>
        <p>
          Thank you for your interest in our website. The protection of your
          privacy is very important to us. In the following we inform you in
          detail about how we handle your data. Storage of access data in server
          log files You can visit our website without providing any personal
          details. We only store access data in so-called server log files, such
          as the name of the requested requested file, date and time of access,
          amount of data transferred and the data volume and the requesting
          provider. This data is exclusively to ensure trouble-free operation of
          the website and to improve our site and to improve our offer and do
          not allow us to draw any us to draw any conclusions about your person.
          Data collection and use For contract processing and when opening a
          customer account We collect personal data when you provide it to us in
          the context of your order, when you contact us (e.g. via the contact
          form or by contact form or e-mail) or when opening a customer account.
          voluntarily. Which data is collected can be seen from the respective
          input forms. We use the data provided by you data provided by you for
          contract processing and processing your inquiries. After complete
          processing of the contract or deletion of your your customer account,
          your data will be blocked for further use and and deleted after the
          expiry of the retention periods under tax and retention periods,
          unless you have expressly consented to further use of your data.
          further use of your data or if we reserve the right to use your data
          for other reserve the right to use data beyond this, which is
          permitted by law permitted by law and about which we inform you below.
          The deletion of your customer account is possible at any time and can
          be done either by sending a message to the contact option described
          below or via a function provided function provided for this purpose in
          the customer account.{" "}
        </p>
        <h2>Data transfer for contract fulfillment</h2>
        <p>
          In order to fulfill the contract, we pass on your data to the shipping
          company shipping company, insofar as this is necessary for the
          delivery of ordered goods is required. For the processing of payments
          the payment data required for this purpose to the bank commissioned
          with the payment the credit institution commissioned with the payment
          and, if applicable payment service provider or to the payment service
          selected by you during the selected by you during the ordering
          process.
        </p>

        <h2>Use of cookies</h2>
        <p>
          To make visiting our website attractive and to enable the use of
          certain certain functions, we use so-called cookies on various pages.
          pages so-called cookies. These are small text files text files that
          are stored on your end device. Some of the cookies cookies used by us
          are deleted after the end of the browser session, i.e. deleted again
          after you close your browser (so-called session cookies). Other
          cookies remain on your end device and enable us to recognize your
          browser the next time you visit our website (persistent cookies). You
          can set your browser so that informed about the setting of cookies and
          decide individually whether to decide whether to accept them or to
          exclude the acceptance of cookies for certain cases or generally
          exclude them. If you do not accept cookies the functionality of our
          website may be restricted.
        </p>
        <h2>Right to information and contact</h2>
        <p>
          You have a right to free information about the data we have stored
          about you your personal data stored by us and, if applicable, a right
          to correction, blocking or deletion of this data. For questions about
          the collection, processing or use of your personal data, for
          information information, correction, blocking or deletion of data as
          well as revocation of consents granted or objection to a particular
          specific use of data, please contact us directly using the contact
          details contact details in our imprint.
        </p>
      </div>
    );
  }
};

export default PrivacyPage;
