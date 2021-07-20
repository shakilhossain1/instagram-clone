import styled from "styled-components";
import tw from "twin.macro";

export const LoginButton = styled.button(({ invalid }) => [
  tw`bg-blue-medium text-white w-full h-8 font-bold mt-2`,
  invalid && tw`opacity-50 cursor-not-allowed`
]);
