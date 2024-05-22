// Styles
import {
  GetUserInfoForm,
  UserInfoSubtitle,
  UserGenderInput,
  GenderWrapper,
  UserGenderLabel,
  UserInfoInput,
  UserDateLabel,
  UserDateInfo,
  UserInfoForm,
} from "./getUserInfoStyle";
import {
  RegisterFormButton,
  RegisterTitle,
  TitleCustomSpan,
} from "../../pages/register/registerStyle";

export const GetUserInfo = () => {
  return (
    <GetUserInfoForm>
      <RegisterTitle>
        <TitleCustomSpan>Med</TitleCustomSpan>Remind
      </RegisterTitle>
      <UserInfoSubtitle>Ma{"'"}lumotlaringizni kiriting</UserInfoSubtitle>
      <UserInfoForm>
        <UserInfoInput type="text" placeholder="Ismingiz" />
        <UserInfoInput type="text" placeholder="Familyangiz" />
        <GenderWrapper>
          <UserGenderLabel>
            Ayol
            <UserGenderInput type="radio" name="gender" />
          </UserGenderLabel>
          <UserGenderLabel>
            Erkak
            <UserGenderInput type="radio" name="gender" />
          </UserGenderLabel>
        </GenderWrapper>
        <UserDateLabel>
          Tug{"'"}ulgan kuningiz
          <UserDateInfo type="date" />
        </UserDateLabel>
        <RegisterFormButton type="submit">
          Davom etish
        </RegisterFormButton>
      </UserInfoForm>
    </GetUserInfoForm>
  );
};
