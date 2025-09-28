import Dropdown from '@/_components/basicComponents/Dropdown'
import FilterAccordion from '@/_components/basicComponents/FilterAccordion'
import Input from '@/_components/basicComponents/Input'
import CategoryFilter from '@/_components/compoundComponents/CategoryFilter'
import ProductList from '@/_components/sectionComponents/ProductList'
import { prisma } from '@/prisma/clientSingleton'

import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const ProductBrowser = async ({ searchParams }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    const categories = await prisma.category.findMany({ select: { name: true } })

    const categoriesArray = ['all', ...Array.from(categories).map(category => category['name'])]
    const categoriesFilterInitialObject: Record<string, boolean> = {}
    categoriesArray.map(category => {
        categoriesFilterInitialObject[category] = (category === 'all')
    })

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="product-layout-container">
            <div className="product-layout-left-filters">
                <FilterAccordion header='Category'>
                    <CategoryFilter initialFilterSettings={categoriesFilterInitialObject} />
                </FilterAccordion>
                <FilterAccordion header='Price'>
                    <Input
                        id='min=price'
                        value={''}
                        type='text'
                        data={{
                            placeholder: 'Min price',
                            error: '',
                            label: '',
                            helper: ''
                        }} size='xl'>
                        <Dropdown name='currency-min' options={['PLN', 'USD']} size='xl' inputDropdown></Dropdown>
                    </Input>
                    <Input
                        id='max=price'
                        value={''}
                        type='text'
                        data={{
                            placeholder: 'Max price',
                            error: '',
                            label: '',
                            helper: ''
                        }} size='xl'>
                        <Dropdown name='currency-max' options={['PLN', 'USD']} size='xl' inputDropdown></Dropdown>
                    </Input>
                </FilterAccordion>
            </div>
            <div className="product-layout-right-section">
                <div className="product-layout-sort-and-limit">
                    <Dropdown name='sort' options={["latest", "oldest", "AtoZ", "ZtoA"]} size='m' className='w-[120px]' ></Dropdown>
                    <Dropdown name='show' options={["10", "20"]} size='m' className='w-[120px]' ></Dropdown>
                </div>
                <ProductList searchParams={searchParams}></ProductList>
            </div>
        </div>
    )
}

export default ProductBrowser