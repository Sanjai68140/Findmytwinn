import { useState } from 'react';
import './birthday-finder.css';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = [31,29,31,30,31,30,31,31,30,31,30,31];
type Birthday = { day: number; month: number };
type Props = { threadUrls?: Record<string,string> };
export function birthdayKey({day,month}:Birthday) {
  return String(month).padStart(2,'0')+'-'+String(day).padStart(2,'0');
}
export default function BirthdayFinder({threadUrls={}}:Props) {
  const [month,setMonth]=useState(11);
  const [day,setDay]=useState(22);
  const [revealed,setRevealed]=useState(false);
  const key=birthdayKey({day,month});
  const url=threadUrls[key];
  return <main className="birthday-app">
    <div className="birthday-stars">✦ &nbsp; ✧ &nbsp; ✦</div>
    <div className="birthday-tag">r/findmytwinn · birthday universe</div>
    <div className="birthday-cake" aria-hidden="true">🎂</div>
    <h1>Someone shares your birthday.</h1>
    <p>Different stories. One special date. Find your people right here on Reddit.</p>
    <div className="birthday-fields">
      <label>Day<select aria-label="Birth day" value={day} onChange={e=>{setDay(Number(e.target.value));setRevealed(false);}}>{Array.from({length:DAYS[month-1]},(_,i)=><option key={i+1} value={i+1}>{i+1}</option>)}</select></label>
      <label>Month<select aria-label="Birth month" value={month} onChange={e=>{const m=Number(e.target.value);setMonth(m);setDay(d=>Math.min(d,DAYS[m-1]));setRevealed(false);}}>{MONTHS.map((m,i)=><option key={m} value={i+1}>{m}</option>)}</select></label>
    </div>
    <button className="birthday-main-button" onClick={()=>setRevealed(true)}>✨ FIND MY BIRTHDAY TWIN</button>
    {revealed && <section className="birthday-result" aria-live="polite"><h2>🎉 {day} {MONTHS[month-1]}</h2><p>Your birthday universe awaits!</p>{url ? <a className="birthday-thread" href={url}>Open my birthday thread →</a> : <p className="birthday-note">This date's Reddit thread has not been connected yet. Come back after launch!</p>}</section>}
    <footer>Only day and month · No sign-up · Stay on Reddit 💜</footer>
  </main>;
}
