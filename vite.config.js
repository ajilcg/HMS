import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); // Enable CORS for all routes