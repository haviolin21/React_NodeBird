import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/Link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margintop: 10px;
`;

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  // const style = useMemo(() => ({ marginTop: 10 }), []); useMemo 사용해서 스타일 만들기. useMemo는 값을 캐싱한다. useCallback은 함수를 캐싱한다.

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input
          name="user-id"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary " htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
      <div></div>
    </Form>
  );
};

export default LoginForm;
