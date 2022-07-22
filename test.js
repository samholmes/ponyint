const { readFileSync } = require('fs')

// const { parse } = require('@babel/parser');
// const traverse = require('@babel/traverse');
// const generate = require('@babel/generator');

import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

import { PonyIntPlugin } from './index';

const code = readFileSync('./testcode.js', 'utf-8');
const ast = parse(code);


traverse(ast, PonyIntPlugin());

const output = generate(ast);

console.log(output.code); // 'const x = 1;'
