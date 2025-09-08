"use server"

import CategoryFilter from '@/_components/compoundComponents/CategoryFilter'
import React from 'react'
import { prisma } from '@/prisma/clientSingleton'
import Input from '@/_components/basicComponents/Input'
import SectionWithHeader from '@/_components/sectionComponents/SectionWithHeader'
import Dropdown from '@/_components/basicComponents/Dropdown'
import Accordion from '@/_components/basicComponents/Accordion'
import FilterAccordion from '@/_components/basicComponents/FilterAccordion'
import Pagination from '@/_components/compoundComponents/Pagination'


const ProductLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const categories = await prisma.category.findMany({ select: { name: true } })

    const categoriesArray = ['all', ...Array.from(categories).map(category => category['name'])]
    const categoriesFilterInitialObject: Record<string, boolean> = {}
    categoriesArray.map(category => {
        categoriesFilterInitialObject[category] = (category === 'all')
    })

    return (
        <div className="product-layout-container">
            <div className="product-layout-left-filters">
                <FilterAccordion header='Category'>
                    <CategoryFilter initialFilterSettings={categoriesFilterInitialObject} />
                </FilterAccordion>
                <FilterAccordion header='Price'>
                    <Input id='min=price' value={''} data={{
                        placeholder: 'Min price',
                        error: '',
                        label: '',
                        helper: ''
                    }} size='xl'>
                        <Dropdown options={['PLN', 'USD']} size='xl' inputDropdown></Dropdown>
                    </Input>
                    <Input id='max=price' value={''} data={{
                        placeholder: 'Max price',
                        error: '',
                        label: '',
                        helper: ''
                    }} size='xl'>
                        <Dropdown options={['PLN', 'USD']} size='xl' inputDropdown></Dropdown>
                    </Input>
                </FilterAccordion>
            </div>
            <div className="product-layout-right-section">
                <div className="product-layout-sort-and-limit">
                    <Dropdown options={["Latest", "Oldest", "A -> Z", "Z -> A"]} size='m' className='w-[120px]' ></Dropdown>
                    <Dropdown options={["10", "20"]} size='m' className='w-[120px]' ></Dropdown>
                </div>
                {children}
                <Pagination currentPage={1} totalPages={10} ></Pagination>
            </div>
        </div>
    )
}

export default ProductLayout