## setup 
1. npm init -y
2. add "type" : "module"
3. npm i typescript --save-dev
4. add script "build": "tsc"
5. npm i -D @types/node
6. add tsconfig.json + configuration / tsc --init
```
{
  "compilerOptions": {
    "module" : "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

```shell
npm run build>
```# node-ts-setup-project
