import { ImageBackground, Content, Paragraph, SectionStyled } from "./Contacts.styled";
import { SectionTitle } from "components/common/SectionTitle.styled";
import ContactsBlock from "./ContactsBlock";
import bg from "assets/images/contacts_bg.jpg";

const Contacts = () => {
  return (
    <SectionStyled id="contacts">
      <ImageBackground src={bg} alt="Background image with two hands touching" />
      <SectionTitle className="title">Let's keep in touch</SectionTitle>
      <Content>
        <Paragraph>
          Feel free to get in touch with me for any inquiries, collaborations,
          or just to say hello. I'm always open to connecting with new people
          and exploring new opportunities.
        </Paragraph>
        <ContactsBlock />
      </Content>
    </SectionStyled>
  );
};

export default Contacts;
