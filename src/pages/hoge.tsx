import { promises } from 'fs';
import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { CatImage } from '../components/CatImage';
import { Country, RandomCat } from '../lib/Types.js';

// type Props = Readonly<{
//   countries: Array<Country>;
// }>;


const IndexPage: NextPage<Props> = ({ countries }: Props): ReactElement => {
//  const [count, setCount] = useState<number>(0);
  let [input, setInput] = useState<string>('0');
  let [reverseInput, setReverseInput] = useState<string>('0');
  let [index, setIndex] = useState<number>('0');
  // const [labourHours, setLabourHours] = useState<string>('0');
  const [catImage, setCatImage] = useState<null | RandomCat>(null);

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
                if (input === '0'){
                  setInput(input = '1')
                } else {
                  setInput(input + '1')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">1</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '2')
                } else {
                  setInput(input + '2')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">2</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '3')
                } else {
                  setInput(input + '3')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">3</span>
            </Button>

            <Button
              className="py-2 bg-pink-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log('input type ', typeof(input))
                if (input === '0'){
                  setInput(input = '0')
                } else if (!input.endsWith('-') && !input.endsWith('+') && !input.endsWith('*') && !input.endsWith('/') && !input.endsWith('.')) {
                  setInput(input + '/')
                }
              }}
            >
              <span className="select-none text-xl">/</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '4')
                } else {
                  setInput(input + '4')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">4</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '5')
                } else {
                  setInput(input + '5')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">5</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '6')
                } else {
                  setInput(input + '6')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">6</span>
            </Button>

            <Button
              className="py-2 bg-pink-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '0')
                } else if (!input.endsWith('-') && !input.endsWith('+') && !input.endsWith('*') && !input.endsWith('/') && !input.endsWith('.')) {
                  setInput(input + '*')
                }
              }}
            >
              <span className="select-none text-xl">*</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '7')
                } else {
                  setInput(input + '7')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">7</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '8')
                } else {
                  setInput(input + '8')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">8</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '9')
                } else {
                  setInput(input + '9')
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">9</span>
            </Button>

            <Button
              className="py-2 bg-pink-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '0')
                } else if (!input.endsWith('-') && !input.endsWith('+') && !input.endsWith('*') && !input.endsWith('/') && !input.endsWith('.')){
                  setInput(input + '+')
                }
              }}
            >
              <span className="select-none text-xl">+</span>
            </Button>

            

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (!input.endsWith('-') && !input.endsWith('+') && !input.endsWith('*') && !input.endsWith('/') && !input.endsWith('.')) {
                  setReverseInput(reverseInput = input.split('').reverse().join(''))
                  setIndex(index = reverseInput.indexOf('+'))
                  console.log(index)
                  console.log(reverseInput)
                  if (!input.includes('.', input.length - index - 1)){
                    setReverseInput(reverseInput = input.split('').reverse().join(''))
                    setIndex(index = reverseInput.indexOf('-'))
                    if (!input.includes('.', input.length - index - 1)){
                    }
                  }
                    if (!input.includes('.', input.length - index - 1)){
                      setReverseInput(reverseInput = input.split('').reverse().join(''))
                      setIndex(index = reverseInput.indexOf('*'))
                      if (!input.includes('.', input.length - index - 1)){
                       
                      }
                    }
                      if (!input.includes('.', input.length - index - 1)){
                        setReverseInput(reverseInput = input.split('').reverse().join(''))
                        setIndex(index = reverseInput.indexOf('/'))
                        if (!input.includes('.', input.length - index - 1)){
                          if(!input.includes('.')){
                          setInput(input + '.')
                          }
                        }
                      }
                }
                console.log(input);
              }}
            >
              <span className="select-none text-xl">.</span>
            </Button>

            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                if (input === '0'){
                  setInput(input = '0')
                } else {
                  setInput(input + '0')
                }
                console.log(input);
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
                if (input === '0'){
                  setInput(input = '-')
                } else if (!input.endsWith('-') && !input.endsWith('+') && !input.endsWith('*') && !input.endsWith('/') && !input.endsWith('.')){
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
      {/* <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="grid grid-cols-3 gap-2">
            <span className="text-gray-800 text-lg">勤務開始時間</span>
            <span className="text-gray-800 text-lg">勤務終了時間</span>
            <span className="text-gray-800 text-lg">労働時間</span>
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);

                setLabourHours(e.target.value);
              }}
            />
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);

                setLabourHours(e.target.value);
              }}
            />
            <span className="select-none text-xl font-mono text-gray-700 text-right">{labourHours}</span>
          </div>
        </div>
      </div> */}
      {/* <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <ul className="list-none">
          {countries.map((country: Country) => {
            return (
              <li key={country.alpha2} className="text-gray-800 even:bg-teal-100 text-lg">
                <div className="my-1">{country.jpnName}</div>
                <div className="my-1">{country.engName}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        フォームで使いそうなもの
        <ul className="list-none">
          <li className="text-gray-800 even:bg-teal-100 text-lg">
            <input
              className="py-2 px-3 border-2 rounded border-gray-200 cursor-text"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);

                setLabourHours(e.target.value);
              }}
              placeholder="テキストボックスです"
            />
          </li>
          <li>
            <select
              className="cursor-pointer border rounded py-3 px-4"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                console.log(e.target.value);
              }}
              value={0}
            >
              <option value={0}>選択してください</option>
              <option value={1}>選択肢1</option>
              <option value={2}>選択肢2</option>
              <option value={3}>選択肢3</option>
            </select>
          </li>
        </ul>
      </div> */}
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
