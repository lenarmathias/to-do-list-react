import { SectionTitle, SeparateContainer, GridSeparateContainer } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <GridSeparateContainer>
            <SectionTitle>
                {title}
            </SectionTitle>
            {extraHeaderContent}
        </GridSeparateContainer>

        <SeparateContainer>
            {body}
        </SeparateContainer>
    </section>
);

export default Section;