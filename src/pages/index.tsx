import {Component, createSignal} from 'solid-js'
import DotsVertical from "../components/icons/DotsVertical";
import Time from '../components/icons/Time'
import Folder from '../components/icons/Folder'
import classNames from '../utils/classNames'
import Cube from "../components/icons/Cube";


const IndexPage: Component = () => {
    const [active, setActive] = createSignal('time')
    return (
        <>
            <div class='h-full flex-1 relative'>
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 overflow-y-auto overflow-y-auto overflow-x-auto">
                    <table class="table table-mini w-full">
                        <thead>
                        <tr class='border-b'>
                            <th class='bg-transparent'>id</th>
                            <th class='bg-transparent'>Name</th>
                            <th class='bg-transparent'>Job</th>
                            <th class='bg-transparent'>company</th>
                            <th class='bg-transparent'>location</th>
                            <th class='bg-transparent'>Last Login</th>
                            <th class='bg-transparent'>Favorite Color</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>United States</td>
                            <td>12/5/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                            <td>China</td>
                            <td>8/15/2020</td>
                            <td>Red</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Marjy Ferencz</td>
                            <td>Office Assistant I</td>
                            <td>Rowe-Schoen</td>
                            <td>Russia</td>
                            <td>3/25/2021</td>
                            <td>Crimson</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Yancy Tear</td>
                            <td>Community Outreach Specialist</td>
                            <td>Wyman-Ledner</td>
                            <td>Brazil</td>
                            <td>5/22/2020</td>
                            <td>Indigo</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Irma Vasilik</td>
                            <td>Editor</td>
                            <td>Wiza, Bins and Emard</td>
                            <td>Venezuela</td>
                            <td>12/8/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Meghann Durtnal</td>
                            <td>Staff Accountant IV</td>
                            <td>Schuster-Schimmel</td>
                            <td>Philippines</td>
                            <td>2/17/2021</td>
                            <td>Yellow</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Sammy Seston</td>
                            <td>Accountant I</td>
                            <td>O'Hara, Welch and Keebler</td>
                            <td>Indonesia</td>
                            <td>5/23/2020</td>
                            <td>Crimson</td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>Lesya Tinham</td>
                            <td>Safety Technician IV</td>
                            <td>Turner-Kuhlman</td>
                            <td>Philippines</td>
                            <td>2/21/2021</td>
                            <td>Maroon</td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td>Zaneta Tewkesbury</td>
                            <td>VP Marketing</td>
                            <td>Sauer LLC</td>
                            <td>Chad</td>
                            <td>6/23/2020</td>
                            <td>Green</td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td>Andy Tipple</td>
                            <td>Librarian</td>
                            <td>Hilpert Group</td>
                            <td>Poland</td>
                            <td>7/9/2020</td>
                            <td>Indigo</td>
                        </tr>
                        <tr>
                            <th>12</th>
                            <td>Sophi Biles</td>
                            <td>Recruiting Manager</td>
                            <td>Gutmann Inc</td>
                            <td>Indonesia</td>
                            <td>2/12/2021</td>
                            <td>Maroon</td>
                        </tr>
                        <tr>
                            <th>13</th>
                            <td>Florida Garces</td>
                            <td>Web Developer IV</td>
                            <td>Gaylord, Pacocha and Baumbach</td>
                            <td>Poland</td>
                            <td>5/31/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>14</th>
                            <td>Maribeth Popping</td>
                            <td>Analyst Programmer</td>
                            <td>Deckow-Pouros</td>
                            <td>Portugal</td>
                            <td>4/27/2021</td>
                            <td>Aquamarine</td>
                        </tr>
                        <tr>
                            <th>15</th>
                            <td>Moritz Dryburgh</td>
                            <td>Dental Hygienist</td>
                            <td>Schiller, Cole and Hackett</td>
                            <td>Sri Lanka</td>
                            <td>8/8/2020</td>
                            <td>Crimson</td>
                        </tr>
                        <tr>
                            <th>16</th>
                            <td>Reid Semiras</td>
                            <td>Teacher</td>
                            <td>Sporer, Sipes and Rogahn</td>
                            <td>Poland</td>
                            <td>7/30/2020</td>
                            <td>Green</td>
                        </tr>
                        <tr>
                            <th>17</th>
                            <td>Alec Lethby</td>
                            <td>Teacher</td>
                            <td>Reichel, Glover and Hamill</td>
                            <td>China</td>
                            <td>2/28/2021</td>
                            <td>Khaki</td>
                        </tr>
                        <tr>
                            <th>18</th>
                            <td>Aland Wilber</td>
                            <td>Quality Control Specialist</td>
                            <td>Kshlerin, Rogahn and Swaniawski</td>
                            <td>Czech Republic</td>
                            <td>9/29/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>19</th>
                            <td>Teddie Duerden</td>
                            <td>Staff Accountant III</td>
                            <td>Pouros, Ullrich and Windler</td>
                            <td>France</td>
                            <td>10/27/2020</td>
                            <td>Aquamarine</td>
                        </tr>
                        <tr>
                            <th>20</th>
                            <td>Lorelei Blackstone</td>
                            <td>Data Coordiator</td>
                            <td>Witting, Kutch and Greenfelder</td>
                            <td>Kazakhstan</td>
                            <td>6/3/2020</td>
                            <td>Red</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class='h-full w-1 flex justify-center items-center bg-gray-100 cursor-col-resize overflow-hidden'>
                <DotsVertical class='w-3 h-3 flex-shrink-0 text-gray-400'/>
            </div>
            <div class='h-full w-1/4 relative flex'>
                <div class='h-full w-12 border-r flex flex-col tabs p-2 space-y-2'>
                    <button class='btn btn-sm btn-square btn-ghost' onClick={() => setActive('time')}>
                        <Time class={classNames(active() === 'time' ? 'text-primary' : 'opacity-50', 'w-4 h-4')}/>
                    </button>
                    <button class='btn btn-sm btn-square btn-ghost' onClick={() => setActive('folder')}>
                        <Folder class={classNames(active() === 'folder' ? 'text-primary' : 'opacity-50', 'w-4 h-4')}/>
                    </button>
                    <button class='btn btn-sm btn-square btn-ghost' onClick={() => setActive('cube')}>
                        <Cube class={classNames(active() === 'cube' ? 'text-primary' : 'opacity-50', 'w-4 h-4')}/>
                    </button>
                </div>
                <div class='flex-1'>

                </div>
            </div>
        </>
    )
}

export default IndexPage