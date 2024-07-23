import { useEffect, useState } from 'react'
import './App.css'
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
  Link as CLink,
} from "@chakra-ui/react";
import { signIn, getUser } from "./lib/api/auth.js"
import Cookies from "js-cookie"

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await signIn({ email, password });
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);
      navigate("calendar");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const f = async () => {
      try {
        const res = await getUser();
        if (res.data.idLogin) {
          navigate("calendar");
        }
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, [navigate])

  return (
    <>
      <Flex h={"100vh"}>
        {/* 画像 */}
        <Flex
          w="50%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Image w="400px" src="calendar.png" />
          <Text fontSize="24px" color="blue.500" fontWeight="bold">
            Googleカレンダークローンアプリ
          </Text>
        </Flex>
        {/* フォーム */}
        <Flex
          w="50%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box w="400px" mx="20px">
            <Text fontSize="24px" color="gray.700" fontWeight="bold" mb="24px">
              ログインページ
            </Text>
            <Input 
              placeholder="メールアドレス"
              mb="16px"
              value={email}
              onChange={(event) => setEmail(event.target.value)}  
            />
            <Input placeholder="パスワード"
              mb="16px" 
              value={password}
              onChange={(event) => setPassword(event.target.value)} 
            />
            <Button w="400px" colorScheme="blue" mb="8px" onClick={login}>
              ログインする
            </Button>
            <Box textAlign="right">
              <CLink color="blue.500">
                <Link to="/signUp">ユーザー登録はこちら</Link>
              </CLink>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </> 
  )
}

export default App
