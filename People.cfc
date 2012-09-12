<cfcomponent namespace="http://samples/xsd">

	<cfset variables.people = ArrayNew(1) />
    <cfset variables.setup = false />
    <cfset variables.count = 0 />

	<cffunction name="createMockRecords" access="private" returntype="void">
    	<cflog text="In createMockRecords"/>
    	<cfloop from="1" to="10" index="x">
            <cfset myPerson = CreateObject("component","Person") />
            <cfset myPerson.firstName = "FIRST #x#" />
            <cfset myPerson.lastName = "LAST #x#" />
            <cfset myPerson.id = x />
            <cfset variables.count = variables.count + 1 />
            <cfset variables.people[x] = myPerson />
        </cfloop>
    </cffunction>

    <cffunction name="getPeople" access="remote" returnType="Person[]">
    	<cflog text="In GetPeople"/>
        <cfif variables.setup eq false>
        	<cfset createMockRecords() />
            <cfset variables.setup = true />
        </cfif>
        <cfreturn variables.people/>
    </cffunction>
    
    <cffunction name="updatePerson" access="remote" returnType="Person">
    	<cfargument name="Person" type="Person" required="yes" />
        <cflog text="In updatePerson"/>
        <!--- Handle Update --->
        <cfset index = 0 />
        <cfloop from="1" to="#ArrayLen(variables.people)#" index="x">
        	<cfif variables.people[x].id eq Person.id>
            	<cfset index = x />
                <cfbreak />
            </cfif>
        </cfloop>
        <cfif index neq 0 >
        	<cfset variables.people[index] = Person />
        </cfif>
        <cfreturn person/>
    </cffunction>
    
    <cffunction name="createPerson" access="remote" returnType="Person">
    	<cfargument name="Person" type="Person" required="yes" />
        <cflog text="In createPerson"/>
        <!--- Handle Create --->
        <cfset variables.count = variables.count + 1 />
        <cfset person.id = variables.count />
        <cfset ArrayAppend(variables.people, person) />
        <cfreturn person/>
    </cffunction>
    
    <cffunction name="deletePerson" access="remote" returnType="void">
    	<cfargument name="Person" type="Person" required="yes" />
        <cflog text="In deletePerson #person.id#"/>
       	<!--- Handle Delete --->
        <cfset ArrayDeleteAt(variables.people, ArrayFind(variables.people, Person)) />
    </cffunction>

</cfcomponent>