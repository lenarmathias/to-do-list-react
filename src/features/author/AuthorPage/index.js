import Header from "../../../common/Header";
import Section from "../../../common/Section"

const AuthorPage = () => (
    <>
        <Header title="O autorze" />
        <Section
            title="Maciej Lenartowicz"
            body={
                <>
                    <p>
                        <strong>Moje pasje to programowanie i muzyka.</strong> Cieszę się, że wybrałem ścieżkę rozwoju od strony <strong>frontendu.
                        </strong>
                        <br />
                        Planuję ciągłe poszerzanie swojej wiedzy z zakresu <strong>React'a</strong> oraz nieustanne dążenie do rozwijania mojej kreatywności. Pragnę osiągnąć pełne opanowanie sztuki projektowania własnych aplikacji.
                    </p>

                    <p>
                        Muzyka towarzyszy mi każdego dnia. Od trzynastego roku życia gram na gitarze.
                        <br />
                        <strong>Tworzę, nagrywam, miksuję i masteruję własne utwory.</strong> Eksperymentuję muzycznie, jednak to <strong>muzyka instrumentalna</strong> stanowi moją ulubioną formę wyrazu.
                    </p>
                </>
            }
        />
    </>
);

export default AuthorPage;