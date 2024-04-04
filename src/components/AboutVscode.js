import React, { useEffect, useState } from 'react';
import './AboutVscode.css';
import spriteSvg from '../images/sprite.svg';
import { motion } from 'framer-motion';
import { VscLayoutSidebarLeft } from 'react-icons/vsc';

const AboutVscode = () => {
  const [activePanel, setActivePanel] = useState('vsCard');
  const [fullScreen, setFullScreen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [layoutHide, setLayoutHide] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 720px)');
    setLayoutHide(mediaQuery.matches);

    //watch for updates
    function updateScreen(e) {
      setLayoutHide(e.matches);
    }
    mediaQuery.addEventListener('change', updateScreen);

    return function cleanup() {
      mediaQuery.removeEventListener('change', updateScreen);
    };
  }, []);

  return (
    <motion.div
    // drag
    // dragConstraints={{
    //   top: -50,
    //   left: -50,
    //   right: 20,
    //   bottom: 20,
    // }}
    >
      <div
        className={`vs ${fullScreen ? 'vs-fullscreen' : ''} ${
          isSmall ? 'vs-small' : ''
        }`}
      >
        <div className={`vs__close-alert ${isClose ? 'vs__close-open' : ''}`}>
          {/* <div className="vs__close-alert-header">Error</div> */}
          <div className="vs__close-error-panel">
            <img
              src={require('../images/error2.png')} // Replace with the actual path to your PNG image
              alt="Error Emoji" // Provide a brief description for accessibility
              width="50%" // Set the width to 100% to make the image fit its container
              height="auto" // Automatically adjust the height to maintain the aspect ratio
            />
            <div className="vs__close-error-text">Something went wrong</div>
            <div
              className="vs__close-button"
              onClick={() => {
                setIsClose(false);
              }}
            >
              ok
            </div>
          </div>
        </div>
        <div className="vs__header">
          <div className="vs__btn-container">
            <motion.div
              className="vs__btn vs__btn--close"
              onClick={() => {
                setIsClose(true);
                setIsSmall(false);
              }}
              whileHover={{
                scale: 1.2,
                backgroundColor: '#e72015',
              }}
              whileTap={{
                scale: 0.9,
              }}
            />
            <motion.div
              className="vs__btn vs__btn--hide"
              onClick={() => {
                setIsSmall(!isSmall);
                setFullScreen(false);
                setIsClose(false);
              }}
              whileHover={{
                scale: 1.2,
                backgroundColor: '#ffae00',
              }}
              whileTap={{
                scale: 0.9,
              }}
            />
            <motion.div
              className="vs__btn vs__btn--extend"
              onClick={() => {
                setFullScreen(!fullScreen);
                setIsSmall(false);
                setIsClose(false);
              }}
              whileHover={{
                scale: 1.2,
                backgroundColor: '#51ff00',
              }}
              whileTap={{
                scale: 0.9,
              }}
            />
          </div>
          <span className="vs__header-text">
            _vs-card.scss - serkankaankuheylan.com
          </span>
        </div>

        <div className="vs__main">
          <div
            className={`vs__sidebar ${layoutHide ? 'vs__sidebar-hide' : ''}`}
          >
            <div
              className="vs__sidebar-header"
              onClick={() => setLayoutHide(!layoutHide)}
            >
              <div className="flex items-center">
                <VscLayoutSidebarLeft className="vs__sidebar-header-icon" />
                <span className="vs__sidebar-header-text">EXPLORER</span>
              </div>
              <span className="vs__sidebar-header-text">...</span>
            </div>

            <div
              className={`vs__sidebar-item-header ${
                layoutHide ? 'vs__sidebar-item-header-hide' : ''
              }`}
            >
              <svg className="vs__sidebar-item-header-icon">
                <use xlinkHref={`${spriteSvg}#icon-chevron-thin-down`}></use>
              </svg>
              <span className="vs__sidebar-item-header-text">
                SERKANKAANKUHEYLAN
              </span>
            </div>

            <ul
              className={`vs__siderbar-items ${
                layoutHide ? 'vs__siderbar-items-hide' : ''
              }`}
            >
              <li className="vs__sidebar-item vs__sidebar-item--lv1">
                <svg className="vs__sidebar-item-icon">
                  <use xlinkHref={`${spriteSvg}#icon-triangle-down`}></use>
                </svg>
                <span className="vs__sidebar-item-text">css</span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv2">
                <svg className="vs__sidebar-item-icon vs__sidebar-item-icon--css">
                  <use xlinkHref={`${spriteSvg}#icon-palette`}></use>
                </svg>
                <span className="vs__sidebar-item-text">style.css</span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv1">
                <svg className="vs__sidebar-item-icon">
                  <use xlinkHref={`${spriteSvg}#icon-triangle-right`}></use>
                </svg>
                <span className="vs__sidebar-item-text">node_modules</span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv1">
                <svg className="vs__sidebar-item-icon">
                  <use xlinkHref={`${spriteSvg}#icon-triangle-down`}></use>
                </svg>
                <span className="vs__sidebar-item-text">sass</span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv2">
                <svg className="vs__sidebar-item-icon">
                  <use xlinkHref={`${spriteSvg}#icon-triangle-right`}></use>
                </svg>
                <span className="vs__sidebar-item-text">abstracts</span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv2">
                <svg className="vs__sidebar-item-icon">
                  <use xlinkHref={`${spriteSvg}#icon-triangle-right`}></use>
                </svg>
                <span className="vs__sidebar-item-text">base</span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv2">
                <svg className="vs__sidebar-item-icon">
                  <use xlinkHref={`${spriteSvg}#icon-triangle-down`}></use>
                </svg>
                <span className="vs__sidebar-item-text">components</span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv3 vs__sidebar-item--active">
                <svg className="vs__sidebar-item-icon vs__sidebar-item-icon--scss">
                  <use xlinkHref={`${spriteSvg}#icon-palette`}></use>
                </svg>
                <span className="vs__sidebar-item-text vs__sidebar-item-text--active">
                  _vs-card.scss
                </span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv2">
                <svg className="vs__sidebar-item-icon">
                  <use xlinkHref={`${spriteSvg}#icon-triangle-right`}></use>
                </svg>
                <span className="vs__sidebar-item-text">layout</span>
              </li>

              <li className="vs__sidebar-item vs__sidebar-item--lv2">
                <svg className="vs__sidebar-item-icon vs__sidebar-item-icon--scss">
                  <use xlinkHref={`${spriteSvg}#icon-palette`}></use>
                </svg>
                <span className="vs__sidebar-item-text">main.scss</span>
              </li>
              <li className="vs__sidebar-item vs__sidebar-item--lv1">
                <svg className="vs__sidebar-item-icon vs__sidebar-item-icon--html">
                  <use xlinkHref={`${spriteSvg}#icon-code`}></use>
                </svg>
                <span className="vs__sidebar-item-text">index.html</span>
              </li>
              <li className="vs__sidebar-item vs__sidebar-item--lv1">
                <svg className="vs__sidebar-item-icon vs__sidebar-item-icon--js">
                  <use xlinkHref={`${spriteSvg}#icon-code`}></use>
                </svg>
                <span className="vs__sidebar-item-text">index.js</span>
              </li>
            </ul>
          </div>

          <div className="vs__panel">
            <ul className="vs__tabs">
              <li
                className={`vs__tab ${
                  activePanel === 'indexJs' ? 'vs__tab--active' : ''
                }`}
                onClick={() => {
                  setActivePanel('indexJs');
                }}
              >
                <svg className="vs__tab-icon vs__tab-icon--js">
                  <use xlinkHref={`${spriteSvg}#icon-code`}></use>
                </svg>
                <span className="vs__tab-text">index.js</span>
                <span className="vs__tab-exit">&times;</span>
              </li>
              <li
                className={`vs__tab ${
                  activePanel === 'vsCard' ? 'vs__tab--active' : ''
                }`}
                onClick={() => {
                  setActivePanel('vsCard');
                }}
              >
                <svg className="vs__tab-icon vs__tab-icon--scss">
                  <use xlinkHref={`${spriteSvg}#icon-palette`}></use>
                  <use xlinkHref="./image/sprite.svg#icon-palette"></use>
                </svg>
                <span className="vs__tab-text">_vs-card.scss</span>
                <span className="vs__tab-exit">&times;</span>
              </li>
              <li
                className={`vs__tab vs__tab-remove ${
                  activePanel === 'variables' ? 'vs__tab--active' : ''
                }`}
                onClick={() => {
                  setActivePanel('variables');
                }}
              >
                <svg className="vs__tab-icon vs__tab-icon--scss">
                  <use xlinkHref={`${spriteSvg}#icon-palette`}></use>
                  <use xlinkHref="./image/sprite.svg#icon-palette"></use>
                </svg>
                <span className="vs__tab-text">_variables.scss</span>
                <span className="vs__tab-exit">&times;</span>
              </li>
            </ul>
            {activePanel === 'vsCard' ? (
              <div
                className={`vs__code-panel ${
                  fullScreen ? 'vs__code-panel-fullscren' : ''
                }`}
              >
                <ul className="vs__code-row-numbers">
                  <li className="vs__code-row-number">251</li>
                  <li className="vs__code-row-number">252</li>
                  <li className="vs__code-row-number">253</li>
                  <li className="vs__code-row-number">254</li>
                  <li className="vs__code-row-number">255</li>
                  <li className="vs__code-row-number">256</li>
                  <li className="vs__code-row-number">257</li>
                  <li className="vs__code-row-number">258</li>
                  <li className="vs__code-row-number">259</li>
                  <li className="vs__code-row-number">260</li>
                  <li className="vs__code-row-number">261</li>
                  <li className="vs__code-row-number">262</li>
                  <li className="vs__code-row-number">263</li>
                  <li className="vs__code-row-number">264</li>
                  <li className="vs__code-row-number">265</li>
                  <li className="vs__code-row-number">266</li>
                  <li className="vs__code-row-number">267</li>
                  <li className="vs__code-row-number">268</li>
                  <li className="vs__code-row-number">269</li>
                  <li className="vs__code-row-number">270</li>
                  <li className="vs__code-row-number">271</li>
                </ul>

                <span className="vs__code-text ">
                  Hello, I have accumulated years of experience as a freelance
                  developer, specializing in both desktop and web development.
                  Over the years, I've continued to create component-rich
                  artistic websites and corporate desktop applications. In the
                  last two years, I've dedicated myself to furthering my
                  expertise in Deep Learning, a sub-branch of Artificial
                  Intelligence that I believe will be a pivotal advancement in
                  our era. I'm actively incorporating the knowledge I've gained
                  from this endeavor into my projects.
                </span>
              </div>
            ) : (
              ''
            )}
            {activePanel === 'indexJs' ? (
              <div
                className={`vs__code-panel ${
                  fullScreen ? 'vs__code-panel-fullscren' : ''
                }`}
              >
                <ul className="vs__code-row-numbers">
                  <li className="vs__code-row-number-js">1</li>
                  <li className="vs__code-row-number-js">2</li>
                  <li className="vs__code-row-number-js">3</li>
                  <li className="vs__code-row-number-js">4</li>
                  <li className="vs__code-row-number-js">5</li>
                  <li className="vs__code-row-number-js">6</li>
                  <li className="vs__code-row-number-js">7</li>
                  <li className="vs__code-row-number-js">8</li>
                  <li className="vs__code-row-number-js">9</li>
                  <li className="vs__code-row-number-js">10</li>
                  <li className="vs__code-row-number-js">11</li>
                </ul>

                <div className="vs__code-indexJS">
                  <div className="row">
                    <span className="ired">import</span>{' '}
                    <span className="igrey">'</span>
                    <span className="iyellow">./index.css</span>
                    <span className="igrey">';</span>
                  </div>
                  <div className="row">
                    <span className="ired">import</span>{' '}
                    <span className="iwhite">React</span>{' '}
                    <span className="ired">from</span>{' '}
                    <span className="igrey">'</span>
                    <span className="iyellow">react</span>
                    <span className="igrey">';</span>
                  </div>
                  <div className="row">
                    <span className="ired">import</span>{' '}
                    <span className="iwhite">ReactDOM</span>{' '}
                    <span className="ired">from</span>{' '}
                    <span className="igrey">'</span>
                    <span className="iyellow">react-dom</span>
                    <span className="igrey">';</span>
                  </div>
                  <div className="row">
                    <span className="ired">import</span>{' '}
                    <span className="iwhite">App</span>{' '}
                    <span className="ired">from</span>{' '}
                    <span className="igrey">'</span>
                    <span className="iyellow">./App</span>
                    <span className="igrey">';</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="iblue">const</span>{' '}
                    <span className="ipurple">el</span>&nbsp;
                    <span className="ired">=</span>&nbsp;
                    <span className="iwhite">documet.</span>
                    <span className="igreen">getElementById</span>
                    <span className="ired">(</span>
                    <span className="igrey">'</span>
                    <span className="iyellow">root</span>
                    <span className="igrey">'</span>
                    <span className="ired">)</span>
                    <span className="igrey">;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="iblue">const</span>{' '}
                    <span className="ipurple">root</span>&nbsp;
                    <span className="ired">=</span>&nbsp;
                    <span className="iwhite">ReactDOM.</span>
                    <span className="igreen">createRoot</span>
                    <span className="ired">(</span>
                    <span className="iwhite">el</span>
                    <span className="ired">)</span>
                    <span className="igrey">;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="iwhite">root.</span>
                    <span className="igreen">render</span>
                    <span className="ired">(</span>
                    <span className="igrey">{`< `}</span>
                    <span className="ired">App</span>
                    <span className="igrey">{`/>`}</span>{' '}
                    <span className="ired">)</span>
                    <span className="igrey">;</span>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
            {activePanel === 'variables' ? (
              <div
                className={`vs__code-panel vs__code-ponel-scroll ${
                  fullScreen ? 'vs__code-panel-fullscren' : ''
                }`}
              >
                <ul className="vs__code-row-numbers">
                  <li className="vs__code-row-number-js">1</li>
                  <li className="vs__code-row-number-js">2</li>
                  <li className="vs__code-row-number-js">3</li>
                  <li className="vs__code-row-number-js">4</li>
                  <li className="vs__code-row-number-js">5</li>
                  <li className="vs__code-row-number-js">6</li>
                  <li className="vs__code-row-number-js">7</li>
                  <li className="vs__code-row-number-js">8</li>
                  <li className="vs__code-row-number-js">9</li>
                  <li className="vs__code-row-number-js">10</li>
                  <li className="vs__code-row-number-js">11</li>
                  <li className="vs__code-row-number-js">12</li>
                  <li className="vs__code-row-number-js">13</li>
                  <li className="vs__code-row-number-js">14</li>
                  <li className="vs__code-row-number-js">15</li>
                  <li className="vs__code-row-number-js">16</li>
                  <li className="vs__code-row-number-js">17</li>
                  <li className="vs__code-row-number-js">18</li>
                  <li className="vs__code-row-number-js">19</li>
                  <li className="vs__code-row-number-js">20</li>
                  <li className="vs__code-row-number-js">21</li>
                  <li className="vs__code-row-number-js">22</li>
                  <li className="vs__code-row-number-js">23</li>
                  <li className="vs__code-row-number-js">24</li>
                  <li className="vs__code-row-number-js">25</li>
                  <li className="vs__code-row-number-js">26</li>
                  <li className="vs__code-row-number-js">27</li>
                  <li className="vs__code-row-number-js">28</li>
                  <li className="vs__code-row-number-js">29</li>
                  <li className="vs__code-row-number-js">30</li>
                  <li className="vs__code-row-number-js">31</li>
                  <li className="vs__code-row-number-js">32</li>
                  <li className="vs__code-row-number-js">33</li>
                  <li className="vs__code-row-number-js">34</li>
                  <li className="vs__code-row-number-js">35</li>
                  <li className="vs__code-row-number-js">36</li>
                  <li className="vs__code-row-number-js">37</li>
                  <li className="vs__code-row-number-js">38</li>
                  <li className="vs__code-row-number-js">39</li>
                  <li className="vs__code-row-number-js">40</li>
                  <li className="vs__code-row-number-js">41</li>
                  <li className="vs__code-row-number-js">42</li>
                  <li className="vs__code-row-number-js">43</li>
                  <li className="vs__code-row-number-js">44</li>
                  <li className="vs__code-row-number-js">45</li>
                  <li className="vs__code-row-number-js">46</li>
                  <li className="vs__code-row-number-js">47</li>
                  <li className="vs__code-row-number-js">48</li>
                  <li className="vs__code-row-number-js">49</li>
                  <li className="vs__code-row-number-js">50</li>
                  <li className="vs__code-row-number-js">51</li>
                  <li className="vs__code-row-number-js">52</li>
                  <li className="vs__code-row-number-js">53</li>
                  <li className="vs__code-row-number-js">54</li>
                  <li className="vs__code-row-number-js">55</li>
                  <li className="vs__code-row-number-js">56</li>
                  <li className="vs__code-row-number-js">57</li>
                  <li className="vs__code-row-number-js">58</li>
                </ul>
                <div className="vs__code-var">
                  <div className="row">
                    <span className="igrey">// Color Variables</span>
                  </div>
                  <div className="row">
                    <span className="vred">$primary-color:</span>{' '}
                    <span className="vgreen">#007bff;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$secondary-color:</span>{' '}
                    <span className="vgreen">#6c757d;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$success-color:</span>{' '}
                    <span className="vgreen">#28a745;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$info-color:</span>{' '}
                    <span className="vgreen">#17a2b8;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$warning-color:</span>{' '}
                    <span className="vgreen">#ffc107;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$danger-color:</span>{' '}
                    <span className="vgreen">#dc3545;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Typography</span>
                  </div>
                  <div className="row">
                    <span className="vred">$body-font:</span>{' '}
                    <span className="iwhite">'Arial', sans-serif;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$heading-font:</span>{' '}
                    <span className="iwhite">
                      'Helvetica Neue', Helvetica, Arial, sans-serif;
                    </span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Spacing</span>
                  </div>
                  <div className="row">
                    <span className="vred">$spacing-unit:</span>{' '}
                    <span className="iwhite">1rem;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$margin-x:</span>{' '}
                    <span className="iwhite">1rem;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$margin-y:</span>{' '}
                    <span className="iwhite">1rem;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$padding-x:</span>{' '}
                    <span className="iwhite">0.5rem;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$padding-y:</span>{' '}
                    <span className="iwhite">0.5rem;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Borders</span>
                  </div>
                  <div className="row">
                    <span className="vred">$border-radius:</span>{' '}
                    <span className="vgreen">4px;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$border-width:</span>{' '}
                    <span className="vgreen">1px;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$border-color:</span>{' '}
                    <span className="vgreen">#ccc;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Box Shadows</span>
                  </div>
                  <div className="row">
                    <span className="vred">$box-shadow:</span>{' '}
                    <span className="vgreen">0 2px 4px rgba(0, 0, 0, 0.1);</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Breakpoints</span>
                  </div>
                  <div className="row">
                    <span className="vred">$sm-screen:</span>{' '}
                    <span className="vgreen">576px;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$md-screen:</span>{' '}
                    <span className="vgreen">768px;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$lg-screen:</span>{' '}
                    <span className="vgreen">992px;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$xl-screen:</span>{' '}
                    <span className="vgreen">1200px;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Z-Index</span>
                  </div>
                  <div className="row">
                    <span className="vred">$z-index-modal:</span>{' '}
                    <span className="vgreen">1000;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$z-index-dropdown:</span>{' '}
                    <span className="vgreen">900;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$z-index-sticky:</span>{' '}
                    <span className="vgreen">800;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Miscellaneous</span>
                  </div>
                  <div className="row">
                    <span className="vred">$transition-duration:</span>{' '}
                    <span className="vgreen">0.3s;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Media Queries</span>
                  </div>
                  <div className="row">
                    <span className="vred">$screen-xs-max:</span>{' '}
                    <span className="vgreen">$sm - screen - 1;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$screen-sm-max:</span>{' '}
                    <span className="vgreen">$md - screen - 1;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$screen-md-max:</span>{' '}
                    <span className="vgreen">$lg - screen - 1;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$screen-lg-max:</span>{' '}
                    <span className="vgreen">$xl - screen - 1;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$screen-sm-min:</span>{' '}
                    <span className="vgreen">$sm - screen;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$screen-md-min:</span>{' '}
                    <span className="vgreen">$md - screen;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$screen-lg-min:</span>{' '}
                    <span className="vgreen">$lg - screen;</span>
                  </div>
                  <div className="row">
                    <span className="vred">$screen-xl-min:</span>{' '}
                    <span className="vgreen">$xl - screen;</span>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div className="row">
                    <span className="igrey">// Responsive Breakpoints</span>
                  </div>
                  <div className="row">
                    <span className="vred">$breakpoint-xs:</span>{' '}
                    <span className="vgreen">
                      "max-width: {`#{screen - xs - max}px`}";
                    </span>
                  </div>
                  <div className="row">
                    <span className="vred">$breakpoint-sm:</span>{' '}
                    <span className="vgreen">
                      "min-width: {`#{screen - sm - min}px`}";
                    </span>
                  </div>
                  <div className="row">
                    <span className="vred">$breakpoint-md:</span>{' '}
                    <span className="vgreen">
                      "min-width: {`#{screen - md - min}px`}";
                    </span>
                  </div>
                  <div className="row">
                    <span className="vred">$breakpoint-lg:</span>{' '}
                    <span className="vgreen">
                      "min-width: {`#{screen - lg - min}px`}";
                    </span>
                  </div>
                  <div className="row">
                    <span className="vred">$breakpoint-xl:</span>{' '}
                    <span className="vgreen">
                      "min-width: {`#{screen - xl - min}px`}";
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className={`vs__copyright ${isSmall ? 'vs__copyright-hide' : ''}`}>
          Coded by Serkan Kaan Kuheylan &copy;
        </div>
      </div>
    </motion.div>
  );
};

export default AboutVscode;
