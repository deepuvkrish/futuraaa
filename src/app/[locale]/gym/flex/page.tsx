import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { FaStar } from 'react-icons/fa'
import { IoBody } from 'react-icons/io5'
import { TbReload } from 'react-icons/tb'

export default function Page() {
  const t = useTranslations('')
  return (
    <div className='px-12'>
      <div className='flex w-full flex-row items-center'>
        <Link href={`../gym`} className=' text-purple-600 dark:text-lime-500'>
          Plans
        </Link>
        <span className='m-2'>
          <RxDoubleArrowRight />
        </span>
        <Link
          href={`#`}
          className='text-2xl font-extrabold text-gray-500 hover:underline'
        >
          Flexibility Training
        </Link>
      </div>
      <div className='flex w-full flex-col'>
        <header>
          <div className='containercardio'>
            <div className='profilecardio'>
              <div className='profile-image'>
                <Image
                  src='/gym/flexi.jpg'
                  alt='cardio'
                  width={200}
                  height={200}
                />
              </div>

              <div className='profile-user-settings'>
                <h1 className='profile-user-name'>Flexibility Training</h1>

                <button className='btn profile-edit-btn'>Everyday</button>

                <button
                  className='btn profile-settings-btn'
                  aria-label='profile settings'
                >
                  <i className='fas fa-cog' aria-hidden='true'></i>
                </button>
              </div>

              <div className='profile-stats'>
                <ul>
                  <li>
                    <span className='profile-stat-count'>10</span> Workouts
                  </li>
                  <li>
                    <span className='profile-stat-count'>60</span> Mins
                  </li>
                  <li>
                    <span className='profile-stat-count'>365</span> Days
                  </li>
                </ul>
              </div>

              <div className='profile-bio'>
                <p>
                  <span className='profile-real-name'>Activities</span> that
                  improve the ability of a joint to maintain the movement
                  necessary for carrying out daily tasks and physical activity.
                  🏃🧘🏻‍♂️🚶🏻‍♀️
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className='containercardio'>
            <div className='gallery'>
              <div className='gallery-item'>
                <Image
                  src='/gym/quad.gif'
                  className='gallery-image'
                  alt='skipping'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Quad</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>
                      Standing Quad Stretch
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 1 - 3
                      Sets
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10 - 30 Repetitions, Per Minute
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/ext.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Ext:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>
                      Extended Triangle Hamstring
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Reps</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 1 -
                      3 Set
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Minutes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 10-15
                      Slow repetitions per Set
                    </li>
                    <li className='gallery-item-likes'>On Each Side</li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/seatedh.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>SSS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> Seated
                      hamstring stretch
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 1-3
                      Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Set:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10-30 repetitions, Per Set
                    </li>
                    <li>On Each Side</li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/hs.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>SSS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Dynamic triceps warmup
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-3
                      Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Set:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      30-40 Seconds per Set
                    </li>
                    <li>On Each direction</li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/tts.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>SSS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Triceps towel stretch
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-3
                      Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Set:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      15-30 Slow repetitions, per Set
                    </li>
                    <li>On Each Hand</li>
                  </ul>
                </div>
              </div>
              <div className='gallery-item'>
                <Image
                  src='/gym/ots.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>SSS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Overhead triceps stretch
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-3
                      Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Set:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      Hold this stretch for 15-30 seconds
                    </li>
                    <li>3-4 Slow repetitions, per set</li>
                    <li>On Each Hand</li>
                  </ul>
                </div>
              </div>
              <div className='gallery-item'>
                <Image
                  src='/gym/cr.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>SSS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> Calf
                      raises
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 1-3
                      Set
                    </li>
                    <li>
                      <span className='flex items-center text-lg'>
                        <TbReload />
                        <p className='ml-1'> 10-30 repetitions, Per Set</p>
                      </span>
                    </li>
                    <li>
                      <span className='flex items-center text-sm'>
                        <IoBody />
                        <p className='ml-1'>
                          strengthen muscles, ligaments in lower legs, ankle and
                          feet
                        </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/hcs.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>SSS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Hamstring/calf stretch
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-3
                      Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Set:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10-25 Slow repetitions, per set
                    </li>
                    <li>On Each Leg</li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/sls.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>SSS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> Supine
                      leg stretch
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-3
                      Set
                    </li>
                    <li>
                      <span className='text-lg'>
                        Stretch leg, perform 3 ankle rotation
                      </span>
                    </li>
                    <li>
                      <span className='flex items-center text-lg'>
                        <TbReload />
                        <p className='ml-1'>10-25 Slow repetitions, per set</p>
                      </span>
                    </li>
                    <li>On Each Leg</li>
                    <li>
                      <span className='flex items-center text-sm'>
                        <IoBody />
                        <p className='ml-1'>Lower Back, Ankle, Calf</p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/sls.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>SSS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Forward fold
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-3
                      Set
                    </li>
                    <li>
                      <span className='flex items-center text-lg'>
                        <TbReload />
                        <p className='ml-1'>10-25 Slow repetitions, per set</p>
                      </span>
                    </li>
                    <li>
                      <span className='flex items-center text-sm'>
                        <IoBody />
                        <p className='ml-1'>
                          hamstrings, shoulders, low back, chest
                        </p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className='gallery-item'>
                <Image
                  src='/gym/hk.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-orange-400' />
                  <FaStar className='text-orange-400' />
                  <FaStar className='text-orange-400' />
                  <FaStar className='text-orange-400' />
                </div>

                <div className='gallery-item-type'>
                  <span className='visually-hidden'>HK</span>
                  <i className='fas fa-clone' aria-hidden='true'></i>
                </div>

                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>HK</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> High
                      Knee
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 1-3
                      Sets
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      2-5 Minutes, Per Set
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/prison.gif'
                  className='gallery-image'
                  alt='Prison Squats'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-red-500' />
                  <FaStar className='text-red-500' />
                  <FaStar className='text-red-500' />
                  <FaStar className='text-red-500' />
                  <FaStar className='text-red-500' />
                </div>

                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>PS</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> Prison
                      Squates
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 1-4
                      Sets
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>sets:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10-30 Slow repetitions, Per Set
                    </li>
                  </ul>
                </div>
            </div>*/}

              <div className='gallery-item'>
                <Image
                  src='/coming.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />

                <div className='gallery-item-type'>
                  <span className='visually-hidden'>Video</span>
                  <i className='fas fa-video' aria-hidden='true'></i>
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Skipping</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> ...
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> ...
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Skips:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      ....
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='loader'></div>
          </div>
        </main>
      </div>
    </div>
  )
}
