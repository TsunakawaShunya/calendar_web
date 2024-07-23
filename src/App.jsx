import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
  Link as CLink,
} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0)

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
          <Text fontSize="32px" color="blue.500" fontWeight="bold">
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
          <Box w="400px">
            <Text fontSize="24px" color="gray.700" fontWeight="bold" mb="24px">
              ログインページ
            </Text>
            <Input placeholder="メールアドレス" mb="16px" />
            <Input placeholder="パスワード" mb="16px" />
            <Button w="400px" colorScheme="blue" mb="8px">
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
