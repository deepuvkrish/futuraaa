import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { RxDoubleArrowRight } from 'react-icons/rx'

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
                  src='/cardio.jpg'
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
                    <span className='profile-stat-count'>14</span> Workouts
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
                  src='/skip.gif'
                  className='gallery-image'
                  alt='skipping'
                  width={400}
                  height={400}
                />

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
                  src='/jog.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />

                <div className='gallery-item-info'>
                  <ul className='flex flex-col'>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Jog</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      Jogging
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Sets:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 1 Set
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Skips:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i>
                      3-15 Minute
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/jump.gif'
                  className='gallery-image'
                  alt='jack'
                  width={400}
                  height={400}
                />

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
                      Reps
                    </li>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>JJ:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i>{' '}
                      100-200/set
                    </li>
                  </ul>
                </div>
              </div>

              <div className='gallery-item'>
                <Image
                  src='/cycle.gif'
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
                  src='/coming.gif'
                  className='gallery-image'
                  alt='jogging'
                  width={400}
                  height={400}
                />

                <div className='gallery-item-type'>
                  <span className='visually-hidden'>Gallery</span>
                  <i className='fas fa-clone' aria-hidden='true'></i>
                </div>

                <div className='gallery-item-info'>
                  <ul>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Likes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 47
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 1
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

                <div className='gallery-item-info'>
                  <ul>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Likes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 94
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 3
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
                  <span className='visually-hidden'>Gallery</span>
                  <i className='fas fa-clone' aria-hidden='true'></i>
                </div>

                <div className='gallery-item-info'>
                  <ul>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Likes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 52
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 4
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

                <div className='gallery-item-info'>
                  <ul>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Likes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 66
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 2
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
                  <span className='visually-hidden'>Gallery</span>
                  <i className='fas fa-clone' aria-hidden='true'></i>
                </div>

                <div className='gallery-item-info'>
                  <ul>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Likes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 45
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 0
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

                <div className='gallery-item-info'>
                  <ul>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Likes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 34
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 1
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

                <div className='gallery-item-info'>
                  <ul>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Likes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 41
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 0
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
                  <ul>
                    <li className='gallery-item-likes'>
                      <span className='visually-hidden'>Likes:</span>
                      <i className='fas fa-heart' aria-hidden='true'></i> 30
                    </li>
                    <li className='gallery-item-comments'>
                      <span className='visually-hidden'>Comments:</span>
                      <i className='fas fa-comment' aria-hidden='true'></i> 2
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
