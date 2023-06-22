import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <div className={`section__separateContainer section__separateContainer--topGapAndGrid`}>
            <h2 className={`section__titleText`}>
                {title}
            </h2>
            {extraHeaderContent}
        </div>

        <div className={`section__separateContainer`}>
            {body}
        </div>
    </section>
);

export default Section;