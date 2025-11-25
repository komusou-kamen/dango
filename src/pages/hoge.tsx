import { promises } from 'fs';
import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { CatImage } from '../components/CatImage';
import { Country, RandomCat } from '../lib/Types.js';




const IndexPage: NextPage<Props> = ({ countries }: Props): ReactElement => {
  const [catImage, setCatImage] = useState<null | RandomCat>(null);
  let [input, setInput] = useState<string>('0');
  let [index, setIndex] = useState<number>(0);
  let [letterPlusIndex, setPlusIndex] = useState<number>(0);
  let [letterMinusIndex, setMinusIndex] = useState<number>(0);
  let [letterDevideIndex, setDevideIndex] = useState<number>(0);
  let [letterMultipleIndex, setMultipleIndex] = useState<number>(0);
  let [inputArray, setInputArray] = useState(['']);

  const findPattern = () : string => {
    setInputArray(inputArray = input.split(''))
    setPlusIndex(letterPlusIndex = inputArray.lastIndexOf('+'))
    setMinusIndex(letterMinusIndex = inputArray.lastIndexOf('-'))
    setDevideIndex(letterDevideIndex = inputArray.lastIndexOf('/'))
    setMultipleIndex(letterMultipleIndex = inputArray.lastIndexOf('*'))
    setIndex(index = Math.max(letterPlusIndex, letterMinusIndex, letterDevideIndex, letterMultipleIndex));
    //インプットの一番最後にある+とか-とかの記号の位置を判別


    //それの次の数字が0なのか、それ以後に小数点を含むのかを判別。それによって処理を変える
    if (input === '0'){
      return 'case1';
      //case1は語尾の０を入力した数字に置き換える  単に０しか入力てない場合          
      } else if (inputArray[index + 1] === '0' && input.length === index + 2){
        return 'case1';
        //1+0　とかの場合も語尾の0を入力した数字に置き換える 
      }else if (index === -1 && !inputArray.includes('.')){
        return 'case2';
      }else if (index !== -1 && inputArray[index + 1] !== '0' && !inputArray.includes('.', index) && !input.endsWith('-') && !input.endsWith('+') && !input.endsWith('*') && !input.endsWith('/')){
        return 'case2';      
        //case2はそのまま語尾に入力したやつを付け加える 2+456とかの場合
      }else if (input.endsWith('-') || input.endsWith('+') || input.endsWith('*') || input.endsWith('/')){
        return 'case3';
        //case3はそのまま語尾に入力したやつを付け加える、ただし +-*/ 以外.  25+5* とかの場合
      }else if (inputArray[index + 1] === '0' && inputArray.includes('.', index)){
        return 'case4';
        //case4はそのまま語尾に入力したやつを付け加える、ただし .以外。   43+0. とかの場合
      }else{
        return 'case4'
        //8247. とかの場合
      }
  }

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search').then(async (res: Response) => {
      const json: Array<RandomCat> = await res.json() as Array<RandomCat>;

      setCatImage(json[0]!);
    });
  }, []);
  
  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{input}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '1'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '1')
                }else if (findPattern() === 'case3'){
                  setInput(input + '1')
                }else if (findPattern() === 'case4'){
                  setInput(input + '1')
                }
              }}
            >
              <span className="select-none text-xl">1</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '2'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '2')
                }else if (findPattern() === 'case3'){
                  setInput(input + '2')
                }else if (findPattern() === 'case4'){
                  setInput(input + '2')
                }
              }}
            >
              <span className="select-none text-xl">2</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '3'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '3')
                }else if (findPattern() === 'case3'){
                  setInput(input + '3')
                }else if (findPattern() === 'case4'){
                  setInput(input + '3')
                }
              }}
            >
              <span className="select-none text-xl">3</span>
            </Button>

            <Button
              className="py-2 bg-pink-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '/'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '/')
                }else if (findPattern() === 'case3'){
                  console.log('there is already +-*/')
                }else if (findPattern() === 'case4'){
                  setInput(input + '/')
                }
              }}
            >
              <span className="select-none text-xl">/</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '4'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '4')
                }else if (findPattern() === 'case3'){
                  setInput(input + '4')
                }else if (findPattern() === 'case4'){
                  setInput(input + '4')
                }
                }
              }
            >
              <span className="select-none text-xl">4</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '5'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '5')
                }else if (findPattern() === 'case3'){
                  setInput(input + '5')
                }else if (findPattern() === 'case4'){
                  setInput(input + '5')
                }
              }}
            >
              <span className="select-none text-xl">5</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '6'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '6')
                }else if (findPattern() === 'case3'){
                  setInput(input + '6')
                }else if (findPattern() === 'case4'){
                  setInput(input + '6')
                }
              }}
            >
              <span className="select-none text-xl">6</span>
            </Button>

            <Button
              className="py-2 bg-pink-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '*'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '*')
                }else if (findPattern() === 'case3'){
                  console.log('there is already +-*/')
                }else if (findPattern() === 'case4'){
                  setInput(input + '*')
                }
              }}
            >
              <span className="select-none text-xl">*</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '7'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '7')
                }else if (findPattern() === 'case3'){
                  setInput(input + '7')
                }else if (findPattern() === 'case4'){
                  setInput(input + '7')
                }
              }}
            >
              <span className="select-none text-xl">7</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
               console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '8'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '8')
                }else if (findPattern() === 'case3'){
                  setInput(input + '8')
                }else if (findPattern() === 'case4'){
                  setInput(input + '8')
                }
              }}
            >
              <span className="select-none text-xl">8</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '9'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '9')
                }else if (findPattern() === 'case3'){
                  setInput(input + '9')
                }else if (findPattern() === 'case4'){
                  setInput(input + '9')
                }
              }}
            >
              <span className="select-none text-xl">9</span>
            </Button>

            <Button
              className="py-2 bg-pink-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '+'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '+')
                }else if (findPattern() === 'case3'){
                  console.log('there is already +-*/')
                }else if (findPattern() === 'case4'){
                  setInput(input + '+')
                }
              }}
            >
              <span className="select-none text-xl">+</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                 console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInput(input + '.')
                } else if (findPattern() === 'case2'){
                  setInput(input + '.')
                }else if (findPattern() === 'case3'){
                  console.log('there is already .')
                }else if (findPattern() === 'case4'){
                  console.log('there is already .')
                }
            }}
            >
              
              <span className="select-none text-xl">.</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
               console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '0'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '0')
                }else if (findPattern() === 'case3'){
                  setInput(input + '0')
                }else if (findPattern() === 'case4'){
                  setInput(input + '0')
                }
              }}
            >
              <span className="select-none text-xl">0</span>
            </Button>

            <Button
              className="py-2 bg-yellow-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                try{
                setInput(input = eval(input))
                setInput(input = `${input}`)
                console.log(input)
                } catch {
                  console.log(input)
                }
              }}
            >
              <span className="select-none text-xl">=</span>
            </Button>
            
            <Button
              className="py-2 bg-pink-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
               console.log(findPattern())
                if(findPattern() === 'case1'){  
                  setInputArray(inputArray = input.split(''))
                  setInputArray(inputArray.splice(input.length - 1, 1, '-'))
                  setInput(input = inputArray.join(''))
                  console.log(input);
                } else if (findPattern() === 'case2'){
                  setInput(input + '-')
                }else if (findPattern() === 'case3'){
                  console.log('there is already +-*/')
                }else if (findPattern() === 'case4'){
                  setInput(input + '-')
                }
              }}
            >
              <span className="select-none text-xl">-</span>
            </Button>
            
            
            
            <Button
              className="py-2 bg-green-200 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setInput(input = '0')
              }}
            >
              <span className="select-none text-xl">C</span>
            </Button>

            
          </div>
        </div>
      </div>
     
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <CatImage cat={catImage} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const buffer = await promises.readFile(join(process.cwd(), 'json', 'countries.json'));
  const str = buffer.toString();

  return {
    props: {
      countries: JSON.parse(str) as Array<Country>
    }
  };
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
