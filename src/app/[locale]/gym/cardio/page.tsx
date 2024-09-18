import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { FaStar } from 'react-icons/fa'

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
          Cardio
        </Link>
      </div>
      <div className='flex w-full flex-col'>
        <header>
          <div className='containercardio'>
            <div className='profilecardio'>
              <div className='profile-image'>
                <Image
                  src='/gym/cardio.jpg'
                  alt='cardio'
                  width={200}
                  height={200}
                />
              </div>

              <div className='profile-user-settings'>
                <h1 className='profile-user-name'>Cardio Training</h1>

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
                    <span className='profile-stat-count'>11</span> Workouts
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
                  <span className='profile-real-name'>Cardio: </span> Brisk
                  walking, running, swimming, cycling, playing tennis and
                  jumping rope. 🏃🏊🏻‍♀️🚶🏻‍♀️
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
                  src='/gym/skip.gif'
                  className='gallery-image'
                  alt='skipping'
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
                      <span className='visually-hidden'>Skipping</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Skipping
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 1 Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Skips:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      100-160 Skips Per Minute
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/jog.gif'
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
                      <span className='visually-hidden'>Jog</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Jogging In Place
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 1 Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Jog:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      3-20 Minutes
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/jump.gif'
                  className='gallery-image'
                  alt='jack'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>

                <div className='gallery-item-type'>
                  <span className='visually-hidden'>Gallery</span>
                  <i className='fas fa-clone' aria-hidden='true'></i>
                </div>

                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>JJ:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Jumping Jack
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 3
                      Sets
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>JJ:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      100-200 repetitions, per Set
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/cycle.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-lime-500' />
                  <FaStar className='text-lime-500' />
                </div>

                <div className='gallery-item-type'>
                  <span className='visually-hidden'>Video</span>
                  <i className='fas fa-video' aria-hidden='true'></i>
                </div>

                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Cycling:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>Cycling
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Reps</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 1
                      Set
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Minutes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 5-15
                      Minutes
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/jumpinglungs.gif'
                  className='gallery-image'
                  alt='jumping lungs gif'
                  width={400}
                  height={400}
                />
                <div className='gallery-item-type'>
                  <span className='visually-hidden'>Gallery</span>
                  <i className='fas fa-clone' aria-hidden='true'></i>
                </div>
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                </div>
                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>JL</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>Jumping
                      Lungs
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-5
                      Sets
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Set</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10-30 repetitions, per Set
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/squat.gif'
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
                      <span className='visually-hidden'>Squat</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> Squats
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-4
                      Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Set:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10-30 repetitions, Per Set
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/burp.gif'
                  className='gallery-image'
                  alt='burpee'
                  width={400}
                  height={400}
                />
                <div className='ratingbcg absolute right-0 top-0 z-50 flex p-3'>
                  <FaStar className='text-orange-400' />
                  <FaStar className='text-orange-400' />
                  <FaStar className='text-orange-400' />
                  <FaStar className='text-orange-400' />
                </div>

                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Burpee</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> Burpee
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 3-5
                      Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>set:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10-25 repetitions, per set
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/gym/mountain.gif'
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

                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Mountain</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>
                      Mountain Climbers
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-4
                      Sets
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Skips:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10-20 Slow repetitions, Per Set
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
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
                  src='/gym/inch.gif'
                  className='gallery-image'
                  alt='jogging'
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
                      <span className='visually-hidden'>Inch</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> Inch
                      Worm
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 2-3
                      Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      10-20 repetitions, Per Set
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
              </div>

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
