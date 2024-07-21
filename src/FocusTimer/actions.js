import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function stop(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function moreTime(){
    timer.moreFiveMinutes()
}

export function lessTime(){
  timer.minusFiveMinutes()
}

export function musicTree(){
    if(el.phTree.classList.contains('music-on')){
        sounds.buttonAudioTree.pause()
        el.phTree.classList.remove('music-on')
    } else {
    el.phTree.classList.add('music-on')
    sounds.buttonAudioTree.play()
    sounds.buttonAudioRain.pause()
    sounds.buttonAudioCoffee.pause()
    sounds.buttonAudioFire.pause()

    el.phRain.classList.remove('music-on')
    el.phCoffee.classList.remove('music-on')
    el.phFire.classList.remove('music-on')
    }
}

export function musicRain(){
    if(el.phRain.classList.contains('music-on')){
        sounds.buttonAudioRain.pause()
        el.phRain.classList.remove('music-on')
    } else {

    el.phRain.classList.add('music-on')
    sounds.buttonAudioRain.play()
    sounds.buttonAudioTree.pause()
    sounds.buttonAudioCoffee.pause()
    sounds.buttonAudioFire.pause()

    el.phTree.classList.remove('music-on')
    el.phCoffee.classList.remove('music-on')
    el.phFire.classList.remove('music-on')
    }
}

export function musicCoffee(){
    if(el.phCoffee.classList.contains('music-on')){
        sounds.buttonAudioCoffee.pause()
        el.phCoffee.classList.remove('music-on')
    } else {
    el.phCoffee.classList.add('music-on')
    sounds.buttonAudioCoffee.play()
    sounds.buttonAudioTree.pause()
    sounds.buttonAudioRain.pause()
    sounds.buttonAudioFire.pause()

    el.phTree.classList.remove('music-on')
    el.phRain.classList.remove('music-on')
    el.phFire.classList.remove('music-on')
    }
}

export function musicFire(){
    if(el.phFire.classList.contains('music-on')){
        sounds.buttonAudioFire.pause()
        el.phFire.classList.remove('music-on')
    } else {
     el.phFire.classList.add('music-on')
    sounds.buttonAudioFire.play()
    sounds.buttonAudioTree.pause()
    sounds.buttonAudioRain.pause()
    sounds.buttonAudioCoffee.pause()

    el.phTree.classList.remove('music-on')
    el.phRain.classList.remove('music-on')
    el.phCoffee.classList.remove('music-on')
    }
}

