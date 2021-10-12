/*
 * @Author: aven9527
 * @Date: 2021-10-11 21:30:48
 * @LastEditors: aven9527
 * @LastEditTime: 2021-10-11 22:04:18
 * @Description: 后端server
 */

const {resolve} = require('path')
const {readFileSync} = require('fs')
const express = require('express')
const app = express()

app.all('*', (req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET')
    next()
})

app.get('/images/:filename', (req, res)=> {    
    res.sendFile(resolve(__dirname, './images/' + req.params.filename))
})

app.get('/imgs', (req, res)=> {
    try {
        const imageData = readFileSync(resolve(__dirname, './data/images.json'), 'utf8')
        const body = {
            ret: 0,
            errmsg: '',
            data: JSON.parse(imageData)
        }
        res.send(body)
    } catch (error) {
        throw new Error(error)
    }
})


app.listen(3000, ()=> {
    console.log('the server has start on 3000');
})